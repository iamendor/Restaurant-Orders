import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";

@ObjectType()
export class Settings {
  @Field()
  id: number;
  @Field()
  enableAnalytics: boolean;
}

@InputType()
export class UpdateSettings extends PartialType(
  PickType(Settings, ["enableAnalytics"] as const, InputType)
) {}
