import { Injectable } from "@nestjs/common";
import { mockAnalytics } from "../../../../../test/helper/mock.analytics";

@Injectable()
export class ReadAnalyticsServiceMock {
  list() {
    return mockAnalytics;
  }
}
