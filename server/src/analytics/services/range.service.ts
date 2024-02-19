import { Injectable } from "@nestjs/common";

export type IRange =
  | "today"
  | "week"
  | "month"
  | "quarter"
  | "half"
  | "year"
  | "all";
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
    const [start, end] = this.gen();
    start.setHours(0, 0, 0, 0);
    return { start, end };
  }

  private current() {
    return new Date();
  }
  private gen() {
    return [this.current(), this.current()];
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
