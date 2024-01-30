import { HttpException, HttpStatus } from "@nestjs/common";

export class SomethingWentWrongException extends HttpException {
  constructor(message?: string) {
    super(
      { message: message || "something went wrong" },
      HttpStatus.BAD_REQUEST
    );
  }
}
