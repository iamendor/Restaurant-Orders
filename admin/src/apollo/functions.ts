import { getServerSession } from "next-auth";
import createApolloClient from ".";
import { DASHBOARD } from "./queries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getDashboardData() {
  const session: any = await getServerSession(authOptions);
  const jwt = session.jwt;
  const client = createApolloClient();
  const min = new Date();
  min.setDate(min.getDate() - 8);
  const { data, error } = await client.query({
    query: DASHBOARD,
    variables: {
      min,
    },
    context: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  });
  if (!data && error) return null;
  return data;
}
