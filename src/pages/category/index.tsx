import { getAllCategorys } from "@/api/categorys";
import { CategortiesItem } from "@/components/Categories/CategortiesItem";

import { Layout, TitleHot } from "@/layout/Layout";
import { ICategory } from "@/types/Catigories";

import { TitleIconBlock } from "..";
import { BiCategoryAlt } from "react-icons/bi";
import { CategortiesImgList } from "@/components/Categories/RenderImgCategory/ListColumn";
import { ImgMyTestKategory } from "@/components/Categories/ImgMyTestKategory";

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
        <CategortiesImgList>
          {categories ? (
            categories.map((catigory: ICategory) => {
              return (
                <ImgMyTestKategory
                  title={catigory.category}
                  image={catigory.imageCategoryUrl}
                  href={catigory._id}
                  isCategory={true}
                />
              );
            })
          ) : (
            <p>Loading....</p>
          )}
        </CategortiesImgList>
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
