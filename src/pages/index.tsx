import { useContext, useEffect } from "react";
import { getAllProducts, searchPost } from "../api/products";
import { IPost } from "@/types/Post";
import { Layout, TitleHot } from "@/layout/Layout";
import { List } from "@/components/Cart/List";
import { CartPost } from "@/components/Cart/CartPost";
import { RenderImgCategory } from "@/components/Categories/RenderImgCategory";
import { ButtonCategotyes } from "@/ui/ButtonCategotyes";

import { CustomContext } from "@/contrex/TasksProvider";
import GetItem from "@/components/GetItem";
import styled from "styled-components";
import { useRouter } from "next/router";

import { MdVideoLibrary } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { NewShorts } from "@/components/NewShorts";

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
  padding: 1px 13px 2px;
  @media (min-width: 1040px) {
    padding-left: 35px;
  }
`;


export default function Product({ posts }: { posts: IPost[] }) {
  const { search, postsIsSearch, setPostsIsSearch } =
    useContext(CustomContext);
  const router = useRouter();

  useEffect(() => {
    if (search) {
      const resProduct = async () => {
        return await searchPost(search).then((res) => setPostsIsSearch(res));
      };
      resProduct();
    }
  }, [search]);

  return (
    <>
      <Layout title="pageProduct">
        {!search ? (
          <>
            <TitleIconBlock>
              <MdVideoLibrary />
              <TitleHot>Shorts</TitleHot>
            </TitleIconBlock>
            <NewShorts />
            <MainApp>
              <TitleIconBlock>
                <BiCategoryAlt />
                <TitleHot>Best videos</TitleHot>
              </TitleIconBlock>
              <RenderImgCategory />
              <ButtonCategotyes />
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
          {posts && !search ? (
            posts.map((post: IPost) => {
              return <CartPost {...post} key={post._id} />;
            })
          ) : (
            <GetItem post={postsIsSearch.data} />
          )}
        </List>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getAllProducts();
    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
}
