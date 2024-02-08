import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

interface Compare {
  str: string;
  hash: string;
}

@Injectable()
export class SecurityService {
  private ROUND = 10;

  hash(str: string) {
    return bcrypt.hashSync(str, this.ROUND);
  }
  compare({ str, hash }: Compare) {
    return bcrypt.compareSync(str, hash);
  }
}
