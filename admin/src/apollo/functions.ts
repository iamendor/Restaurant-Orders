import { getServerSession } from "next-auth";
import { ACCOUNT, DASHBOARD, WAITERS } from "./queries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ISession } from "@/interfaces/session";
import apolloClient from ".";

export const genAuthHeaders = (jwt) => ({
  headers: { Authorization: `Bearer ${jwt}` },
});

export async function getDashboardData() {
  const { jwt }: ISession = await getServerSession(authOptions);

  const min = new Date();
  min.setDate(min.getDate() - 8);
  const { data, error } = await apolloClient.query({
    query: DASHBOARD,
    variables: {
      min,
    },
    context: genAuthHeaders(jwt),
  });
  if (!data && error) return null;
  return data;
}

export async function getAccountData() {
  const { jwt }: ISession = await getServerSession(authOptions);

  const { data, error } = await apolloClient.query({
    query: ACCOUNT,
    context: genAuthHeaders(jwt),
  });
  if (!data && error) return null;
  return data;
}

export async function getWaiters() {
  const { jwt }: ISession = await getServerSession(authOptions);
  const { data, error } = await apolloClient.query({
    query: WAITERS,
    context: genAuthHeaders(jwt),
  });
  if (!data && error) return null;
  return data;
}
