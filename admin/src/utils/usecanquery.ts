import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function useCanQuery() {
  const { data: session } = useSession();
  const params = useSearchParams();

  return session && params.get("id") ? true : false;
}
