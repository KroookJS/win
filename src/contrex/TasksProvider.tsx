import { searchPost } from "@/api/products";
import { IPost } from "@/types/Post";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const CustomContext = createContext<any>(null);

export const Context = (props: any) => {
  // save in localStorage
  const [search, setSearch] = useState("");
  const [postsIsSearch, setPostsIsSearch] = useState<IPost[]>([]);
  const [likeArr, setLikeArr] = useState<string[]>([]);
  const [categoryFile, setCategoryFile] = useState<any>();
  const handelLike = (id: string, setIsLike: any) => {
    setIsLike(true);
    setLikeArr([...likeArr, id]);
  };
  const handelDizLike = (id: string, setIsLike: any) => {
    setIsLike(false);
    setLikeArr(likeArr.filter((el: any) => el !== id));
  };

  const value = {
    likeArr,
    setLikeArr,
    handelLike,
    handelDizLike,
    categoryFile,
    setCategoryFile,
    search,
    setSearch,
    postsIsSearch,
    setPostsIsSearch,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
