import { HttpStatus } from "@nestjs/common";
import { GraphQLError } from "graphql";

export class SomethingWentWrongException extends GraphQLError {
  constructor(message?: any) {
    super(message || "something went wrong", {
      extensions: { code: message.code },
    });
  }
}

export class AuthException extends GraphQLError {
  constructor() {
    super("unauthorized", { extensions: { code: HttpStatus.UNAUTHORIZED } });
  }
}

export class PermissionDeniedException extends GraphQLError {
  constructor() {
    super("permission denied", {
      extensions: { code: HttpStatus.FORBIDDEN },
    });
  }
}

export class NotSpecifiedException extends GraphQLError {
  constructor(resource: string) {
    super(`no ${resource} specified`, {
      extensions: { code: HttpStatus.BAD_REQUEST },
    });
  }
}

export class RestaurantClosedException extends GraphQLError {
  constructor() {
    super("restaurant is closed", {
      extensions: { code: HttpStatus.FORBIDDEN },
    });
  }
}

export class EmptyTableException extends GraphQLError {
  constructor() {
    super("no orders on table", {
      extensions: { code: HttpStatus.BAD_REQUEST },
    });
  }
}

export class NotFoundException extends GraphQLError {
  constructor() {
    super("not found", { extensions: { code: HttpStatus.NOT_FOUND } });
  }
}

export class UniqueFieldFailedException extends GraphQLError {
  constructor() {
    super("unique field failed", {
      extensions: { code: 400 },
    });
  }
}
