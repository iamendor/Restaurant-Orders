import { CustomScalar, Scalar } from "@nestjs/graphql";
import { ASTNode } from "graphql";

@Scalar("Date")
export class DateScalar implements CustomScalar<number, Date> {
  parseValue(value: number | string): Date {
    return new Date(value);
  }

  serialize(value: Date): number {
    return value.getTime();
  }

  parseLiteral(ast: any): Date {
    if (ast.kind) return new Date(ast.value);
    return null;
  }
}
