import { getAllProducts, searchPost } from "@/api/products";
import { CartPost } from "@/components/Cart/CartPost";
import { List } from "@/components/Cart/List";
import PaginationNavigete from "@/components/Pagination";
import PostIsLoading from "@/components/isLoadingComponents/PostIsLoading";
import { CustomContext } from "@/contrex/TasksProvider";
import { IPost } from "@/types/Post";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const RenderPostsTestMem = () => {
    const { search, setPostsIsSearch } = useContext(CustomContext);

    const [page, setPage] = useState<any>(1);
    
  
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
  
    function handlePaginationChange() {
      setPage((page: number) => page + 1);
  
      router.push(`/?page=${page}`);
    }
    function handlePaginationChangeBack() {
      setPage((page: number) => page - 1);
  
      router.push(`/?page=${page}`) /* , undefined, { shallow: true } */;
    }
  const arr = [...Array(5)].map((_, i) => <PostIsLoading key={i} />);
  return (
    <>
      <List>
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
      />
    </>
  );
};

export const RenderPostsTest = React.memo(RenderPostsTestMem)