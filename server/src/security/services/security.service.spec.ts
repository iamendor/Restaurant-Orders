import { Test, TestingModule } from "@nestjs/testing";
import { SecurityService } from "./security.service";

describe("SecurityService", () => {
  let service: SecurityService;
  const testPw = "testPassword";
  let hash;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecurityService],
    }).compile();

    service = module.get<SecurityService>(SecurityService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should hash password", () => {
    const pw = service.hash(testPw);

    expect(pw).toBeDefined();
    hash = pw;
  });

  it("should compare password", () => {
    const compare = service.compare({ str: testPw, hash });

    expect(compare).toBeTruthy();
  });
});
