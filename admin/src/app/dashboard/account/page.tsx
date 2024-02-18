import { genAuthHeaders, getAccountData } from "@/apollo/functions";
import styles from "./page.module.scss";
import AccountTab from "@/components/Dashboard/Account/Account";
import Settings from "@/components/Dashboard/Account/Settings";
import apolloClient from "@/apollo";
import { UPDATE_SETTINGS } from "@/apollo/mutations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Account() {
  const session = await getServerSession(authOptions);
  const info = await getAccountData();
  if (!info) return <p>Error</p>;
  const {
    restaurantInfo: { settings, ...restaurantInfo },
  } = info;

  return (
    <div className={styles.account}>
      <AccountTab info={restaurantInfo} />
      <Settings settings={settings} />
    </div>
  );
}
