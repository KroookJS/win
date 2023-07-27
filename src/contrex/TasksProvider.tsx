import { IUser } from "@/api/dto/auth.dto";
import { IPost } from "@/types/Post";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useRef, useState } from "react";
export const CustomContext = createContext<any>(null);

export const Context = (props: any) => {
  // save in localStorage
  const [search, setSearch] = useState("");
  const [postsIsSearch, setPostsIsSearch] = useState<IPost[]>([]);
  const [likeArr, setLikeArr] = useState<string[]>([]);
  const [categoryFile, setCategoryFile] = useState<any>();
  const [modelFile, setModelFile] = useState<any>();
  const [categoryText, setCategoryText] = useState("");
  const [userCook, setUserCook] = useState<IUser>();

  //Cooki

  const getCookiUser = () => {
    if (typeof window !== "undefined") {
      const { user } = parseCookies();
      const newData = user && JSON.parse(user);
      setUserCook(newData);
    } else return console.log("Cooki undefined");
  };

  useEffect(() => {
    if (!userCook) {
      getCookiUser();
    }
    getFavoriteFromLs();
  }, []);

  //localStorage

  //get
  const getFavoriteFromLs = () => {
    const data = localStorage.getItem("favoriteId");
    return data ? setLikeArr(JSON.parse(data)) : "sdsddc";
  };

  let copy = Object.assign([], likeArr);

  const handelLike = (id: string, setIsLike: any) => {
    setIsLike(true);
    copy.push(id);

    const json = JSON.stringify(copy);
    localStorage.setItem("favoriteId", json);
    setLikeArr(copy);
  };

  const handelDizLike = (id: string, setIsLike: any) => {
    setIsLike(false);

    const delFn = copy.filter((el: string) => el !== id);
    setLikeArr(delFn);

    const json = JSON.stringify(delFn);
    localStorage.setItem("favoriteId", json);
  };

  const value = {
    likeArr,
    setLikeArr,

    handelDizLike,
    categoryFile,
    setCategoryFile,
    modelFile,
    setModelFile,
    search,
    setSearch,
    postsIsSearch,
    setPostsIsSearch,
    categoryText,
    setCategoryText,
    userCook,
    handelLike,
    copy,
    getFavoriteFromLs,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
