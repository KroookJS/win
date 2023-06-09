import { Header } from "@/components/Header";
import { LinkStyle } from "@/ui/Button";
import { Wrapper } from "@/ui/Wrraper";
import { Button, ButtonBase } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const InputFile = styled.input`
  border: none;
  width: 350px;
  heigth: 50px;
  border-radius: 20px;
  background: grey;
  padding: 0.5rem 1rem;
  color: #fff;
`;

const InputImage = styled(InputFile)`
  background: rebeccapurple;
`;
const InputGif = styled(InputFile)`
  background: green;
`;

const WrapperFlexColomn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export default function Uploads() {
  const [videoPriv, setVideoPriv] = useState(
    "https://top-fon.com/uploads/posts/2023-01/1674696708_top-fon-com-p-kinolenta-fon-prezentatsii-199.jpg"
  );
  return (
    <>
      <Header />
      <Wrapper>
        <WrapperFlexColomn>
          <Link href="/" style={LinkStyle}>
            <Button>Вернуться назад</Button>
          </Link>
          <img
            src="http://wstmn.ru/wp-content/uploads/2017/02/orig.jpg"
            alt="videoLoading"
          />

          <InputFile placeholder="Загрузить Видео" type="file" />
          <InputImage placeholder="Загрузить привью" type="file" />
          <h2>Загруженный Img</h2>
          <InputGif placeholder="Загрузить gif" type="file" />
          <h2>Загруженная Gif</h2>

          <InputFile placeholder="title" />
          <InputFile placeholder="deskription" />
          <Link href="/" style={LinkStyle}>
            <ButtonBase>Назад</ButtonBase>
          </Link>
          <Link href="/uploads/AddTitle" style={LinkStyle}>
            <ButtonBase>Далее</ButtonBase>
          </Link>
        </WrapperFlexColomn>
      </Wrapper>
    </>
  );
}
