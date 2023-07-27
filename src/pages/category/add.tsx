import { WrapperForm } from "@/ui/Wrraper";
import React, { useState } from "react";
import { BtnBlock, ImgBlock, ImgContainer, TitleBlock } from "../addPost";
import { Button, Form, Input } from "antd";
import Link from "next/link";

import { InputButtonBlock } from "../addPost/inputIpload/FormInput";
import { UploadVideo } from "@/api/upload";
import axios from "axios";
import { useRouter } from "next/router";

export default function Add() {
  const [imageCategoty, setImageCategoty] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const router = useRouter();

  const imputFileRef = React.useRef<any>(null);

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      UploadVideo(formData).then((res) => setImageCategoty(res));
    } catch (error) {
      console.log(error);
    }
  };

  const imageCategoryUrl = imgUrl ? imgUrl : imageCategoty;
  const onSubmit = async () => {
    try {
      const fields = {
        category: title,
        imageCategoryUrl: imageCategoryUrl,
      };

      await axios.post("http://localhost:4444/category", fields);

      router.push(`/category/add`);
    } catch (error) {
      console.log(error);
      alert("Ошибка при создании поста!");
    }
  };

  return (
    <WrapperForm>
      <ImgContainer>
        <ImgBlock
          src={
            imageCategoty
              ? `http://localhost:4444${imageCategoty}`
              : "https://pro-dachnikov.com/uploads/posts/2023-01/1673559754_pro-dachnikov-com-p-meiko-andrei-vasilevich-mnogo-mebeli-foto-24.png"
          }
          alt="privImg"
        />
        <TitleBlock>{title ? title : "title"}</TitleBlock>
      </ImgContainer>

      <InputButtonBlock>
        <Button onClick={() => imputFileRef.current.click()}>
          Загрузить Картинку Категории
        </Button>
        <input
          ref={imputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
      </InputButtonBlock>

      <Form.Item name={["imgUrl", "imgUrl"]}>
        <Input
          placeholder="Ведите urlImg"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </Form.Item>
      <Form.Item name={["title", "title"]} rules={[{ required: true }]}>
        <h2>Title: {title}</h2>
        <Input
          placeholder="Ведите title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <BtnBlock>
        <Link href="/">
          <Button>Вернуться назад</Button>
        </Link>

        {/* <Link href="/" style={LinkStyle}> */}
        <Button size="large" onClick={onSubmit}>
          Опубликовать
        </Button>
        {/* </Link> */}
      </BtnBlock>
    </WrapperForm>
  );
}
