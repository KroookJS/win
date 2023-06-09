import { getAllCategorys, getOneCategory } from "@/api/categorys";
import { Cart } from "@/components/Cart/Cart";

import { useRouter } from "next/router";
import React from "react";
import { ICategory, TItemCategory } from "@/types/Catigories";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { GetStaticProps, GetStaticPropsContext } from "next/types";
import { IPost } from "@/types/Post";
import { CartPost } from "@/components/Cart/CartPost";

export default function CatigoryPage({ categories }: { categories: IPost[] }) {
  console.log(categories);

  return (
    <>
      <Layout category={categories[0].category[0]}>
        {categories.map((catigory: IPost) => {
          return (
            <Link href={`/details/${catigory._id}`} style={LinkStyle}>
              <CartPost key={catigory._id} {...catigory} />
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getAllCategorys();

  /* const paths = data.map((id) => ({
    params: { id: id.toString() },
  })); */
  const paths = data.map((el: IPost) => ({
    params: { id: el._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cat = context.params ? context.params.id : "1";
  const categories = await getOneCategory(String(cat));

  if (!categories) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      categories,
    },
  };
};
