"use client";

import { signOut } from "next-auth/react";

export default function DashboardPage() {
  return <div onClick={() => signOut()}>Hello Dashboard</div>;
}
