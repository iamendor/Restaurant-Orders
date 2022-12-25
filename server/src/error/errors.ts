import { HttpException, HttpStatus } from "@nestjs/common";

export class SomethingWentWrongException extends HttpException {
  constructor(message?: string) {
    super(
      { message: "something went wrong", error: message },
      HttpStatus.BAD_REQUEST
    );
  }
}

export class NotFoundResourceException extends HttpException {
  constructor(whatNotFound?: string) {
    super(`${whatNotFound} not found`, HttpStatus.BAD_REQUEST);
  }
}
