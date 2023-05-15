import { getAllCategorys, getOneCategory } from "@/api/categorys";
import { Cart } from "@/components/Product/Cart";

import { useRouter } from "next/router";
import React from "react";
import { TCategories, TItemCategory } from "@/types/Catigories";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { GetStaticProps, GetStaticPropsContext } from "next/types";

export default function CatigoryPage({
  categories,
}: {
  categories: TCategories;
}) {
  const { query } = useRouter();
  return (
    <>
      <Layout title={"category " + query.catigory}>
        {categories.products.map((catigory: TItemCategory) => {
          return (
            <Link href={`/details/${catigory.id}`} style={LinkStyle}>
              <Cart key={catigory.id} {...catigory} />
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getAllCategorys();

  const paths = data.map((catigory) => ({
    params: { catigory: catigory.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cat = context.params ? context.params.catigory : "1";
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
