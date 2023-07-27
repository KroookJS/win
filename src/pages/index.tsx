import { useContext, useEffect, useState } from "react";
import { getAllProducts, searchPost } from "../api/products";
import { IPost } from "@/types/Post";
import { Layout, TitleHot } from "@/layout/Layout";
import { List } from "@/components/Cart/List";
import { CartPost } from "@/components/Cart/CartPost";
import { TopChart } from "@/components/Categories/TopChart";

import { CustomContext } from "@/contrex/TasksProvider";
import GetItem from "@/components/GetItem";
import styled from "styled-components";

import { MdVideoLibrary } from "react-icons/md";

import { AiOutlineFire } from "react-icons/ai";
import { NewShorts } from "@/components/NewShorts";

import { useRouter } from "next/router";
import PaginationNavigete from "@/components/Pagination";
import { useQuery, dehydrate, QueryClient } from "react-query";
import PostIsLoading from "@/components/isLoadingComponents/PostIsLoading";

const MainApp = styled.main`
  margin-top: 1px;

  /*   @media (min-width: 450px) {
    margin-top: 20px;
  }
  @media (min-width: 767px) {
    margin-top: 100px;
  }
  @media (min-width: 1024px) {
    margin-top: 150px;
  } */
`;
const TitleSearch = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  padding: 1px 13px 2px;
`;
export const TitleIconBlock = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 13px 2px;
  @media (min-width: 1040px) {
    /* padding-left: 35px; */
    display: block;
    text-align: center;
  }
`;

export default function Product() {
  const { search, postsIsSearch, setPostsIsSearch, likeArr } =
    useContext(CustomContext);

  const [page, setPage] = useState<any>(1);
  const arr = [...Array(5)].map((_, i) => <PostIsLoading key={i} />);

  const { data: posts, isLoading } = useQuery(
    ["getPosts", page],
    async () => await getAllProducts(page),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (search) {
      const resProduct = async () => {
        return await searchPost(search).then((res) => setPostsIsSearch(res));
      };
      resProduct();
    }
  }, [search]);

  function handlePaginationChange(isBack: boolean) {
    setPage((page: number) => page + 1);

    router.push(`/?page=${page}`);
  }
  function handlePaginationChangeBack(isBack: boolean) {
    setPage((page: number) => page - 1);

    router.push(`/?page=${page}`) /* , undefined, { shallow: true } */;
  }

  return (
    <>
      <Layout>
        {!search ? (
          <>
            <TopChart />
            <TitleIconBlock>
              <MdVideoLibrary />
              <TitleHot>Shorts</TitleHot>
            </TitleIconBlock>

            <NewShorts />
            <MainApp>
              {/* <ButtonCategotyes /> */}
              <TitleIconBlock>
                <AiOutlineFire />
                <TitleHot>Today's video</TitleHot>
              </TitleIconBlock>
            </MainApp>
          </>
        ) : (
          <TitleSearch>According to your request"{search}" Found</TitleSearch>
        )}

        <List>
          {posts && !isLoading && !search
            ? posts.map((post: IPost) => {
                return <CartPost {...post} key={post._id} />;
              })
            : arr}
        </List>
        {/* <GetItem post={postsIsSearch.data} /> */}
        <PaginationNavigete
          handlePaginationChange={handlePaginationChange}
          handlePaginationChangeBack={handlePaginationChangeBack}
          curentPage={2}
          total={50}
        />
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
