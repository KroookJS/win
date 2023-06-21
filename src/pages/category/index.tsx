import { getAllCategorys } from "@/api/categorys";
import { CategortiesItem } from "@/components/Categories/CategortiesItem";

import { Layout, TitleHot } from "@/layout/Layout";
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
        <TitleHot>选择类别</TitleHot>
        {categories ? (
          categories.map((catigory: ICategory) => {
            return (
              <CategortiesItem
                title={catigory.category}
                imgUrl={catigory.imageCategoryUrl}
                _id={catigory._id}
              />
            );
          })
        ) : (
          <p>装载量....</p>
        )}
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
