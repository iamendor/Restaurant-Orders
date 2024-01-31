import { ArgumentsHost, Catch, Logger } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";

@Catch()
export class UnExpectedException implements GqlExceptionFilter {
  logger: Logger = new Logger();
  catch(exception: any, host: ArgumentsHost) {
    this.logger.error("unexpected error: " + exception.message);
    return exception;
  }
}
