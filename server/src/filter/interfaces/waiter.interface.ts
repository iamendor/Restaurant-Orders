import { SearchName, Email, Gender } from "../rules/waiters.rule";

export interface IWaiterFilter {
  name: SearchName;
  email: Email;
  gender: Gender;
}
