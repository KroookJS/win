import { getAllCategorys, getOneCategory } from "@/api/categorys";

import React, { useContext } from "react";
import { Layout, TitleHot } from "@/layout/Layout";
import Link from "next/link";
import { ButtonDelete, LinkStyle } from "@/ui/Button";
import { GetStaticProps } from "next/types";
import { IPost } from "@/types/Post";
import { CartPost } from "@/components/Cart/CartPost";


import { BiCategoryAlt } from "react-icons/bi";
import { CustomContext } from "@/contrex/TasksProvider";

import { QueryClient, dehydrate } from "react-query";
import { BlockDescCategoryAndModal } from "../model/[id]";
import { TitleIconBlock } from "@/components/TitleComp";

export default function CatigoryPage(props: any) {
  const { categoryText } = useContext(CustomContext);
  const categories = props.dehydratedState.queries[0].state.data;

  return (
    <>
      <Layout
        title={`Porn Videos with Milfs: Free Sex Movies with ${categoryText} &#124; TelePorn`}
        description={`Porn with ${categoryText} is here! On TelePorn.com you will find free porn videos with mature women who love to fuck. Sexy nude milfs with big tits do blowjob and swallow cum. Hot porn videos with scenes of anal sex and cum filling of milf pussies will pleasantly surprise you with sexy mature crumbs!`}
      >
        <TitleIconBlock>
          <BiCategoryAlt />

          <TitleHot>Category</TitleHot>
          <TitleHot style={{ color: "var(--colors-btn)" }}>
            {categoryText}
          </TitleHot>
        </TitleIconBlock>
        <BlockDescCategoryAndModal>
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
              <h3>Unfortunately, there are no videos in this category</h3>
              <h3>
                You can become the first author of the category by clicking on +
              </h3>
              <Link href="/category">
                <ButtonDelete style={{ width: "80%" }}>Go Back</ButtonDelete>
              </Link>
            </div>
          )}
        </BlockDescCategoryAndModal>
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
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([`getOneCategory`, cat], async () =>
      getOneCategory(String(cat))
    );

    if (!dehydrate(queryClient)) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};
