import { getAllCategorys, getOneCategory } from "@/api/categorys";

import React from "react";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { ButtonDelete, LinkStyle } from "@/ui/Button";
import { GetStaticProps } from "next/types";
import { IPost } from "@/types/Post";
import { CartPost } from "@/components/Cart/CartPost";
import Head from "next/head";

export default function CatigoryPage({ categories }: { categories: IPost[] }) {
  

  return (
    <>
      <Layout>
        {categories.length ? (
          categories.map((catigory: IPost) => {
            return (
              <Link
                key={catigory._id}
                href={`/details/${catigory._id}`}
                style={LinkStyle}
              >
                <CartPost key={catigory._id} {...catigory} />
              </Link>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>不幸的是，没有此类别的视频</h3>
            <h3>
              您可以通过点击成为该类别的第一作者
              上+
            </h3>
            <Link href="/category">
              <ButtonDelete style={{ width: "80%" }}>
              回去吧
              </ButtonDelete>
            </Link>
          </div>
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
