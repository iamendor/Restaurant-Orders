import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { extractRIdFromContext } from "../../../guard/helper";
import { GqlExecutionContext } from "@nestjs/graphql";
import { OpenHourService } from "../services/openhour.service";
import { RestaurantClosedException } from "../../../error";
import { IdGuard } from "../../../auth/guards/id.guard";

@Injectable()
export class OpenGuardBase implements CanActivate {
  constructor(private readonly openHourService: OpenHourService) {}
  private getDay(num: number) {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[num - 1];
  }
  private formatTime(date: Date) {
    return date.toTimeString().slice(0, 8);
  }

  private checkBetween(check, start, end) {
    const startDate = new Date(`1970-01-01T${start}`);
    const endDate = new Date(`1970-01-01T${end}`);
    const checkDate = new Date(`1970-01-01T${check}`);
    return checkDate >= startDate && checkDate <= endDate;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const currentDate = new Date();
    const day = this.getDay(currentDate.getDay());
    const ctx = GqlExecutionContext.create(context);
    const id = extractRIdFromContext(ctx);
    const openHour = (await this.openHourService.list(id)).find(
      (oh) => oh.name == day
    );
    if (!openHour) throw new RestaurantClosedException();
    const isBetween = this.checkBetween(
      this.formatTime(currentDate),
      openHour.start,
      openHour.end
    );
    if (!isBetween) throw new RestaurantClosedException();
    return true;
  }
}

@Injectable()
export class OpenGuard implements CanActivate {
  constructor(
    private readonly idIntercept: IdGuard,
    private readonly openGuard: OpenGuardBase
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const OG = await this.openGuard.canActivate(context);
    return IIG && OG;
  }
}
