import * as React from "react";
import Button from "@mui/material/Button";

import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { WrapperForm } from "@/ui/Wrraper";
import { CategoryForm } from "@/components/CategoryForm";
import styled from "styled-components";
import { UploadPrivRes, UploadPrivVideo, UploadVideo } from "@/api/upload";
import { FormInput } from "./inputIpload/FormInput";
import axios from "axios";

import { CustomContext } from "@/contrex/TasksProvider";
import { Layout } from "@/layout/Layout";

export const BtnBlock = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
`;
export const ImgContainer = styled.div`
  background: #91789d1a;
  border-radius: 20px;
  border: 1px solid #d59fee1a;
  margin: 10px auto 20px;
  padding: 10px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  max-width: 420px;

  box-shadow: var(--shadow-upload);
`;
export const ImgBlock = styled.img`
  width: 100%;
  height: 219px;
  border-radius: 20px;
`;
export const TitleBlock = styled.h3`
  color: dimgrey;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function AddPost() {
  const [text, setText] = React.useState("");
  const [time, setTime] = React.useState("");

  const [title, setTitle] = React.useState("");

  const [imageUrl, setImageUrl] = React.useState<any>("");
  const [imagePrivIpload, setImagePrivIpload] = React.useState("");
  const [imagePrivUrl, setImagePrivUrl] = React.useState(
    "https://sun6-22.userapi.com/impg/pdwHXcQiCSjKowQG55E27PcuxS7lmC412QrosQ/t-eWUSSE7kc.jpg?size=604x230&quality=96&sign=25b40681014d131a5aa344db5d08fd77&type=album"
  );
  const [privVideo, setPrivVideo] = React.useState("");
  const [isLoadingPriv, setIsLoadingPriv] = React.useState<any>(false);
  const imputFileRef = React.useRef(null);
  const imputFilePrivRef = React.useRef(null);

  const [isEdit, setIsEdit] = React.useState(true);

  const { categoryFile, modelFile, userCook } = React.useContext(CustomContext);

  const newArrCategory =
    categoryFile &&
    categoryFile.map((el: any) => {
      return el.value;
    });

  const newArrModel =
    modelFile &&
    modelFile.map((el: any) => {
      return el.value;
    });

  const handleChangeFile = async (event: any) => {
    try {
      setIsLoadingPriv(true);
      const formData = new FormData();
      const file = event.target.files[0];
      console.log("file", file);
      console.log("event target", event.target);
      console.log("event", event.timeStamp);

      formData.append("image", file);
      UploadVideo(formData).then((res) => {
        setImageUrl(res);
        setIsLoadingPriv(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeFilePriviu = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      UploadVideo(formData).then((res) => setImagePrivIpload(res));
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        videoUrl: imageUrl,
        privUrl: imagePrivIpload,
        privVideoUrl: privVideo,
        text,
        time,
        category: newArrCategory ? newArrCategory.join(",") : "Hot",
        model: newArrModel ? newArrModel.join(",") : "Hot",
        tags: "Sex,PornTube,YouPorn,LovPorn,Teleporn",
        userId: userCook ? userCook._id : "64aacd1ea8145397aabea5eb",
        userAvatar: userCook && userCook.avatarUrl,
        userName: userCook && userCook.fullName,
      };

      await axios.post("http://37.1.219.168:4444/posts", fields);

      /* navigate(`/trx`); */
    } catch (error) {
      console.log(error);
      alert("Ошибка при создании поста!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onSubmitVideoPriv = async () => {
    try {
      setIsLoadingPriv(true);
      await UploadPrivVideo(`.${imageUrl}`, time).then((res) => {
        setIsLoadingPriv(false);
      });
    } catch (error) {
      0;
      console.log(error);
      setIsLoadingPriv(false);
      alert("Ошибка генерации пивью!");
    }
  };
  const onSubmitVideoPrivResult = async () => {
    try {
      setIsLoadingPriv(true);
      await UploadPrivRes().then((res) => {
        setPrivVideo(res);
        if (res.length > 5) {
          setIsLoadingPriv(false);
        } else {
          alert("Сгенирируйте еще раз!");
        }
      });
    } catch (error) {
      console.log(error);
      setIsLoadingPriv(false);
      alert("Ошибка генерации пивью!");
    }
  };

  return (
    <WrapperForm>
      {isLoadingPriv && <h2 style={{ textAlign: "center" }}>Loading....</h2>}
      <ImgContainer>
        <ImgBlock
          src={
            imagePrivIpload
              ? `http://37.1.219.168:4444${imagePrivIpload}`
              : imagePrivUrl
          }
          alt="privImg"
        />
        <TitleBlock>{title ? title : "title"}</TitleBlock>
      </ImgContainer>

      {isEdit ? (
        <FormInput
          imputFileRef={imputFileRef}
          handleChangeFile={handleChangeFile}
          imageUrl={imputFileRef ? `http://37.1.219.168:4444${imageUrl}` : ""}
          onClickRemoveImage={onClickRemoveImage}
          setIsEdit={setIsEdit}
          handleChangeFilePriviu={handleChangeFilePriviu}
          imputFilePrivRef={imputFilePrivRef}
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
          setTime={setTime}
          time={time}
        />
      ) : (
        <CategoryForm
          onSubmitVideoPriv={onSubmitVideoPriv}
          onSubmitVideoPrivResult={onSubmitVideoPrivResult}
        />
      )}
      <BtnBlock>
        <Button onClick={() => setIsEdit(true)}>Вернуться назад</Button>

        {!isEdit && (
          <Link href="/" style={LinkStyle}>
            <Button size="large" variant="contained" onClick={onSubmit}>
              Опубликовать
            </Button>
          </Link>
        )}
      </BtnBlock>
    </WrapperForm>
  );
}
