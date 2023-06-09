"use client";
import { getAllCategorys } from "@/api/categorys";
import { CategortiesItem } from "@/components/Categories/CategortiesItem";
import { Layout } from "@/layout/Layout";
import { ICategory } from "@/types/Catigories";
import { LinkStyle } from "@/ui/Button";
import Link from "next/link";

export default function CategoriesPage({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <>
      <Layout title="Category Page">
        {categories.map((catigory: ICategory) => {
          return (
            <Link
              key={catigory._id}
              href={`/category/${catigory._id}`}
              style={LinkStyle}
            >
              <CategortiesItem key={catigory._id} title={catigory.category} />
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
