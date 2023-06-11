import { getAllCategorys, getOneCategory } from "@/api/categorys";

import React from "react";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { GetStaticProps } from "next/types";
import { IPost } from "@/types/Post";
import { CartPost } from "@/components/Cart/CartPost";

export default function CatigoryPage({ categories }: { categories: IPost[] }) {
  console.log(categories);

  return (
    <>
      <Layout title="Category_id" category={categories[0].category[0]}>
        {categories ? (
          categories.map((catigory: IPost) => {
            return (
              <Link href={`/details/${catigory._id}`} style={LinkStyle}>
                <CartPost key={catigory._id} {...catigory} />
              </Link>
            );
          })
        ) : (
          <p>Loading category...</p>
        )}
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    const data = await getAllCategorys();

    const paths = data.map((el: any) => ({
      params: { id: el._id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
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
  } catch {
    return {
      props: { socials: null },
    };
  }
};
