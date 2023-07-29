import { CustomContext } from "@/contrex/TasksProvider";
import React, { FC, useContext } from "react";
import { BsPostcard } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

import {
  AvaCenter,
  BlockIconLeft,
  BlockIconRight,
  BlockInfoStatick,
  Column,
  ContainerProfileHead,
  LeftBlockSave,
  NameProfile,
  RightBlockLike,
  TagName,
  TextStatick,
  TextStatickBorder,
} from "./styleHederProfile";

type TProps = {
  avatarUser?: string;
  loginUsers?: string;
  videoLength?: number;
};

export const HeaderProfile: FC<TProps> = ({
  avatarUser,
  loginUsers,
  videoLength,
}) => {
  const { userCook } = useContext(CustomContext);

  return (
    <>
      <ContainerProfileHead>
        <Column>
          <LeftBlockSave>
            <BlockInfoStatick>
              <TextStatickBorder>
                {videoLength
                  ? videoLength
                  : userCook
                  ? userCook.videos.length
                  : 0}
              </TextStatickBorder>
              <TextStatick>Post</TextStatick>
              <BlockIconLeft>
                <BsPostcard style={{ color: "#000000" }} />
              </BlockIconLeft>
            </BlockInfoStatick>
          </LeftBlockSave>
          <AvaCenter
            src={
              avatarUser
                ? "http://45.9.42.130:4444" + avatarUser
                : userCook
                ? userCook.avatarUrl
                : "https://www.photoweb.ru/wp-content/uploads/2022/12/photo_2022-11-28_10-19-32.jpg"
            }
            alt="avatar"
          />

          <RightBlockLike>
            <BlockInfoStatick>
              <TextStatickBorder>20k</TextStatickBorder>
              <TextStatick>Views</TextStatick>
              <BlockIconRight>
                <MdFavorite style={{ color: "white" }} />
              </BlockIconRight>
            </BlockInfoStatick>
          </RightBlockLike>
        </Column>
        <NameProfile>
          {loginUsers
            ? loginUsers
            : userCook
            ? userCook.fullName
            : "Your Profile"}
        </NameProfile>
        <TagName>@telePorn</TagName>
      </ContainerProfileHead>
    </>
  );
};
