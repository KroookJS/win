import { useContext, useEffect,} from "react";
import {  getAllProducts, searchPost } from "../api/products";
import { IPost } from "@/types/Post";
import { Layout, TitleHot } from "@/layout/Layout";
import { List } from "@/components/Cart/List";
import { CartPost } from "@/components/Cart/CartPost";
import { RenderImgCategory } from "@/components/Categories/RenderImgCategory";
import { ButtonCategotyes } from "@/ui/ButtonCategotyes";
import Slider from "@/components/Slider";
import { CustomContext } from "@/contrex/TasksProvider";
import GetItem from "@/components/GetItem";
import styled from "styled-components";

const MainApp = styled.main`
  margin-top: 1px;

  @media (min-width: 450px) {
    margin-top: 20px;
  }
  @media (min-width: 767px) {
    margin-top: 100px;
  }
  @media (min-width: 1024px) {
    margin-top: 150px;
  }
`;
const TitleSearch = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  padding: 1px 13px 2px;
`;

export default function Product({ posts }: { posts: IPost[] }) {
  const { search, setSearch, postsIsSearch, setPostsIsSearch } =
    useContext(CustomContext);

  useEffect(() => {
    if (search) {
      const resProduct = async () => {
        return await searchPost(search).then((res) => setPostsIsSearch(res));
      };
      resProduct();
    }
  }, [search]);

  console.log(postsIsSearch);

  return (
    <>
      <Layout title="pageProduct">
        {!search ? (
          <>
            <Slider />
            <MainApp>
              <TitleHot>最佳影片</TitleHot>
              <RenderImgCategory />

              <ButtonCategotyes />
              <TitleHot>今天的视频</TitleHot>
            </MainApp>
          </>
        ) : (
          <TitleSearch>根据您的要求 "{search}" 找到</TitleSearch>
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
