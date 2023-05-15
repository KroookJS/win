"use client";
import { Header } from "@/components/Header";
import Slider from "@/components/Slider";
import { getAllCategorys } from "@/api/categorys";
import { CategortiesList } from "@/components/Categories/CategortiesList";
import { CategortiesItem } from "@/components/Categories/CategortiesItem";
import { Layout } from "@/layout/Layout";

export default function CategoriesPage({
  categories,
}: {
  categories: string[];
}) {
  return (
    <>
      <Layout title="pageProduct">
        {categories.map((catigory: any) => {
          return <CategortiesItem key={catigory} title={catigory} />;
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
