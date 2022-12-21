import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "src/app.module";
import * as request from "supertest";

describe("Orders API", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe("Authentication", () => {
    describe("Restaurant", () => {
      it.todo("should signup a restaurant");
      it.todo("login the restaurant and return a jwt token");
      it.todo("updates the restaurant's name");
      it.todo("updates the restaurant's password and relogin");
      it.todo("returns unauthorized on login because password changed");
    });

    describe("Waiter", () => {
      it.todo("should create a new waiter");
      it.todo("login the waiter");
      it.todo("updates the waiter");
      it.todo("updates the waiter's password and relogin");
      it.todo("return unauthorized on login because password changed");
      it.todo("deletes the waiter");
    });

    it.todo("deletes the restaurant");
  });
});
