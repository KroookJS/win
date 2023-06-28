import { getAllCategorys } from "@/api/categorys";
import { CategortiesItem } from "@/components/Categories/CategortiesItem";

import { Layout, TitleHot } from "@/layout/Layout";
import { ICategory } from "@/types/Catigories";
import { LinkStyle } from "@/ui/Button";
import Link from "next/link";
import { TitleIconBlock } from "..";
import { BiCategoryAlt } from "react-icons/bi";

export default function CategoriesPage({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <>
      <Layout title="Category Page">
        <TitleIconBlock>
          <BiCategoryAlt />
          <TitleHot>Category</TitleHot>
        </TitleIconBlock>
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
          <p>Loading....</p>
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
