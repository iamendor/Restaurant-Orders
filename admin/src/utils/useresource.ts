"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useResource() {
  const [error, setError] = useState(null);
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const { data: session } = useSession();

  return {
    error,
    setError,
    id: params.get("id"),
    router,
    path,
    session,
    params,
  };
}
