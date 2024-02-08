import { Catch, ExceptionFilter, UnauthorizedException } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { AuthException } from "../error";

@Catch(UnauthorizedException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch() {
    throw new AuthException();
  }
}
