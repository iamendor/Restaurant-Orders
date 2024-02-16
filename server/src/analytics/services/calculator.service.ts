import { Injectable } from "@nestjs/common";

export interface ICalculator {
  data: any[];
  key: string;
}

@Injectable()
export class CalculatorService {
  average({ data, key }: ICalculator) {
    return data.reduce((a, b) => a + b[key], 0) / data.length;
  }
  sum({ data, key }: ICalculator) {
    return data.reduce((a, b) => a + b[key], 0);
  }
  median({ data, key }: ICalculator) {
    if (data.length % 2 == 0) {
      const middleIndex = data.length / 2;
      return (data[middleIndex - 1][key] + data[middleIndex][key]) / 2;
    }
    const middleIndex = Math.floor(data.length / 2);
    return data[middleIndex][key];
  }
}
