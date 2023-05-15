import { getOneCategory } from "@/api/categorys";
import { Cart } from "@/components/Product/Cart";
import { CategotyesButton } from "@/components/ButtonCategotyes";
import { Header } from "@/components/Header";
import { List } from "@/components/Product/List";
import Slider from "@/components/Slider";
import { TCategories } from "@/types/Product";
import { TItemCategory } from "@/types/Product";
import { useRouter } from "next/router";
import React from "react";

export default function Smart({ category }: { category: TCategories }) {
  const { query } = useRouter();
  return (
    <>
      <Header />
      <Slider />
      <CategotyesButton />
      <List>
        {category.products.map((el: any) => {
          return <Cart key={el.id} {...el} />;
        })}
      </List>
    </>
  );
}

export async function getServerSideProps(context: { query: string }) {
  const category = await getOneCategory(context.query);
  return {
    props: {
      category,
    },
  };
}
