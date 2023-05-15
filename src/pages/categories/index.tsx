"use client";
import { getAllCategorys } from "@/api/categorys";
import { CategortiesItem } from "@/components/Categories/CategortiesItem";
import { Layout } from "@/layout/Layout";
import { LinkStyle } from "@/ui/Button";
import Link from "next/link";

export default function CategoriesPage({
  categories,
}: {
  categories: string[];
}) {
  return (
    <>
      <Layout title="pageProduct">
        {categories.map((catigory: string) => {
          return (
            <Link
              key={catigory}
              href={`/categories/${catigory}`}
              style={LinkStyle}
            >
              <CategortiesItem key={catigory} title={catigory} />
            </Link>
          );
        })}
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  const categories = await getAllCategorys();
  return {
    props: {
      categories,
    },
  };
}
