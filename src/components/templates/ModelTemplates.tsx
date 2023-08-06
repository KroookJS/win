import { TitleHot } from "@/layout/Layout";

import { ButtonCategoryPage } from "@/ui/Button";
import React, { FC, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";

import { ImgMyTestKategory } from "../Categories/ImgMyTestKategory";
import { IModel } from "@/types/Catigories";
import { ListColumn } from "../Categories/RenderCategory/ListColumn";
import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery";
import { getAllUsers } from "@/api/user";
import { IUser } from "@/api/dto/auth.dto";
import { UsersItems } from "../Items/UsersItems";
import { ListsColumnUsers } from "../Categories/RenderCategory/ListsColumnUsers";
import { TitleIconBlock } from "../TitleComp";

type TProps = {
  models: IModel[];
};

export const ModelTemplates: FC<TProps> = ({ models }) => {
  const [isActivePage, setIsActivePage] = useState(true);

  const { data: users, isSuccess } = useShortsQuery(getAllUsers, "getUsers");

  const modelRender = models ? (
    models.map((mod: IModel) => {
      return (
        <ImgMyTestKategory
          title={mod.model}
          image={mod.imageModelUrl}
          href={mod._id}
        />
      );
    })
  ) : (
    <p>Loading....</p>
  );

  const userRender = users ? (
    users.map((user: IUser) => {
      return (
        <UsersItems
          userAvatar={user.avatarUrl}
          user={user._id}
          userName={user.fullName}
          postsCount={user.posts ? user.posts.length : 69}
        />
      );
    })
  ) : (
    <p>Loading....</p>
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",

          padding: " 10px",
        }}
      >
        <TitleIconBlock>
          <BiCategoryAlt />
          <TitleHot>{isActivePage ? "Users" : "Models"}</TitleHot>
        </TitleIconBlock>
        {isActivePage ? (
          <ButtonCategoryPage onClick={() => setIsActivePage(false)}>
            Models
          </ButtonCategoryPage>
        ) : (
          <ButtonCategoryPage onClick={() => setIsActivePage(true)}>
            Users
          </ButtonCategoryPage>
        )}
      </div>

      {!isActivePage ? (
        <ListColumn>{modelRender}</ListColumn>
      ) : (
        <ListsColumnUsers>{userRender}</ListsColumnUsers>
      )}
    </>
  );
};
