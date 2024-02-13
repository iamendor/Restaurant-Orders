import { Injectable } from "@nestjs/common";
import { WhereCurrency } from "../../../../models/currency.model";
import { mockCurrency } from "../../../../../test/helper/mock.unit";

@Injectable()
export class CurrencyServiceMock {
  find(where: WhereCurrency) {
    return { ...mockCurrency, ...where };
  }

  list() {
    return [mockCurrency];
  }
}
