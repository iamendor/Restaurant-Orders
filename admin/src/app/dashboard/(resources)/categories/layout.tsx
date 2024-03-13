import ResourceLayout from "@/components/Dashboard/Resource/Layout";
import styles from "./layout.module.scss";

export default function CategoriesLayout({
  list,
  category,
}: {
  list: React.ReactNode;
  category: React.ReactNode;
}) {
  return (
    <ResourceLayout
      list={list}
      detail={category}
      createHref="/dashboard/categories/create"
    />
  );
}
