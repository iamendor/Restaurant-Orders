import { User } from "next-auth";

export interface ISession {
  jwt: string;
  user: User;
}
