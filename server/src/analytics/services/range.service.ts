import { Injectable } from "@nestjs/common";

export type IRange = "week" | "month" | "quarter" | "half" | "year" | "all";
export interface Range {
  start: Date;
  end: Date;
}

@Injectable()
export class RangeService {
  calculate(range: IRange) {
    return this[range]();
  }
  private today() {
    return new Date();
  }
  private gen() {
    return [this.today(), this.today()];
  }
  private week(): Range {
    const [start, end] = this.gen();
    start.setDate(end.getDate() - 8);
    return { start, end };
  }
  private month(): Range {
    const [start, end] = this.gen();
    start.setDate(end.getMonth() - 1);
    return { start, end };
  }
  private quarter(): Range {
    const [start, end] = this.gen();
    start.setDate(end.getMonth() - 3);
    return { start, end };
  }
  private half(): Range {
    const [start, end] = this.gen();
    start.setDate(end.getMonth() - 6);
    return { start, end };
  }
  private year(): Range {
    const [start, end] = this.gen();
    start.setFullYear(end.getFullYear() - 1);
    return { start, end };
  }
  private all() {
    return { start: null, end: null };
  }
}
