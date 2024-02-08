import { ArgumentsHost, Catch, Logger } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { expectedExceptions } from "../error";

@Catch()
export class UnExpectedException implements GqlExceptionFilter {
  logger: Logger = new Logger();
  catch(exception: any, host: ArgumentsHost) {
    for (let i = 0; i < expectedExceptions.length; i++) {
      if (exception instanceof expectedExceptions[i]) return exception;
    }
    this.logger.error("unexpected error: " + exception.message);
    return exception;
  }
}
