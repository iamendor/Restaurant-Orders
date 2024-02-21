import { HttpStatus, UnauthorizedException } from "@nestjs/common";
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
  constructor(field?: string) {
    super("unique field failed", {
      extensions: { code: HttpStatus.BAD_REQUEST, field },
    });
  }
}

export class OrderClosedException extends GraphQLError {
  constructor() {
    super("order is closed", {
      extensions: { code: HttpStatus.BAD_REQUEST },
    });
  }
}

export class OrderReadyException extends GraphQLError {
  constructor() {
    super("order is ready", {
      extensions: { code: HttpStatus.BAD_REQUEST },
    });
  }
}

export class ShortArrayException extends GraphQLError {
  constructor(length: number) {
    super(`array must be at least ${length} long`, {
      extensions: { code: HttpStatus.BAD_REQUEST },
    });
  }
}

export class NestedCategoryException extends GraphQLError {
  constructor(parent: number) {
    super(`Category cannot be nested under ${parent}`, {
      extensions: { code: HttpStatus.BAD_REQUEST },
    });
  }
}

export const expectedExceptions = [
  AuthException,
  PermissionDeniedException,
  NotSpecifiedException,
  RestaurantClosedException,
  EmptyTableException,
  NotFoundException,
  UniqueFieldFailedException,
  OrderClosedException,
  OrderReadyException,
  ShortArrayException,
  NestedCategoryException,
];
