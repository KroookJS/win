import { useContext } from "react";
import { getAllProducts, searchPost } from "../api/products";

import { Layout } from "@/layout/Layout";

import { CustomContext } from "@/contrex/TasksProvider";

import { dehydrate, QueryClient } from "react-query";

import { TopTes } from "@/components/IndexTopTest";
import { RenderPostsTest } from "../components/RenderPostsTest";

export default function Product() {
  const { search } = useContext(CustomContext);

  return (
    <>
      <Layout>
        <TopTes search={search} />

        {/* <List>
          {posts && !isLoading && !search
            ? posts.map((post: IPost) => {
                return <CartPost {...post} key={post._id} />;
              })
            : arr}
        </List>

        <PaginationNavigete
          handlePaginationChange={handlePaginationChange}
          handlePaginationChangeBack={handlePaginationChangeBack}
          curentPage={2}
          total={50}
        /> */}
        <RenderPostsTest />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    let page = "";
    if (context.query.page) {
      page = context.query.page;
    }
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["getPosts", page], async () =>
      getAllProducts(page)
    );

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
}
