import styled from "styled-components";

import { ButtonBy } from "@/ui/Button";

import GetItem from "./GetItem";
import { getAllProducts } from "@/api/products";
import { useCallback, useEffect, useState } from "react";

import { NavBarModel } from "./NavBarModel";
import { IPost } from "@/types/Post";

import ReactPlayer from "react-player";
import { getOneCategoryByName } from "@/api/categorys";

import { useRouter } from "next/router";
import { getRecommendationByCategory } from "@/api/recommendations";

const Wrapper = styled.section`
  position: relative;
  max-width: 600px;

  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    margin-top: 2.5rem;
    /* grid-template-columns: minmax(100px, 400px) 1fr; */
    align-items: center;
    gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    margin-top: 3rem;
    /* grid-template-columns: minmax(400px, 600px) 1fr; */
    max-width: 1240px;
    margin: 0 auto;
  }
`;

const InfoImage = styled.img`
  display: block;
  border-radius: var(--radii);
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0 auto;
  padding: 0 0.5rem;
  font-weight: var(--fw-normal);
  text-align: start;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0 0.3rem;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  padding 0.3rem;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const ModelStyles = styled.span`
  padding: 4px 10px;
  border: 1px solid var(--colors-btn);
  border-radius: 6px;
  opaciti: 0.5;
  margin: 0 0 0 10px;
  color: var(--colors-btn);
  cursor: pointer;
`;
const TagsStyles = styled.span`
  color: var(--colors-btn);
  margin: 0 0 0 6px;
`;

const ImageBlock = styled.div`
  position: relative;
  max-width: 600px;
  /* margin: 0 auto; */
`;

const IconBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  padding: 0.2rem 0.6rem;
  border-radius: 14px;
  background: #8080806b;
  display: flex;
  aligtn-items: center;

  @media (min-width: 797px) {
    top: 30%;
  }
  @media (min-width: 1020px) {
    top: 40%;
  }
`;

export const Info = (props: IPost) => {
  const { title, text, videoUrl, viewsCount, category, tags, _id } =
    props || {};

  const [post, setPost] = useState<IPost[]>();
  const [isCategoryId, setIsCategoryId] = useState<any>("");

  const router = useRouter();

  useEffect(() => {
    if (!post) {
      const resProduct = async () => {
        return await getRecommendationByCategory(category[0]).then((res) =>
          setPost(res.filter((el) => el._id !== _id))
        );
      };
      resProduct();
    }

    if (isCategoryId) {
      router.push(`/category/${isCategoryId}`);
    }
  }, [isCategoryId]);

  const findIdCategory = async (name: string) => {
    try {
      await getOneCategoryByName(name).then((res) => setIsCategoryId(res));
    } catch (error) {
      console.log("Ошибка перехода в категорию");
    }
  };
  

  return (
    <>
      <Wrapper>
        <ImageBlock>
          <ReactPlayer
            height={232}
            width={"100vw"}
            /* playing={true} */
            controls={true}
            loop={true}
            playsinline={true}
            url={`http://localhost:4444${videoUrl}`}
          />
          {/* <IconBlock>
            <AiOutlinePlayCircle />
          </IconBlock> */}
        </ImageBlock>

        <div>
          <InfoTitle>{title}</InfoTitle>
          <ListGroup>
            <List>
              <ListItem>
                <b>意见书:</b> {viewsCount}
              </ListItem>

              <ListItem>
                <b>类别:</b>
                {category
                  ? category.map((el, index) => {
                      return (
                        <ModelStyles
                          onClick={() => findIdCategory(el)}
                          key={index}
                        >
                          {el && el}
                        </ModelStyles>
                      );
                    })
                  : "Category"}
              </ListItem>
              <ListItem>
                <b>模型:</b>
                {tags
                  ? tags.map((el, index) => {
                      return <ModelStyles key={index}>{el}</ModelStyles>;
                    })
                  : "tags"}
              </ListItem>
              <ListItem>
                <b>资料描述:</b> {text}
              </ListItem>
              <ListItem>
                <b>特格斯:</b>

                {tags
                  ? tags.map((el, index) => {
                      return <TagsStyles key={index}>{el}</TagsStyles>;
                    })
                  : "tags"}
              </ListItem>
              <ListItem>
                <ButtonBy>1131 $</ButtonBy>
              </ListItem>
            </List>
          </ListGroup>
        </div>
        <div>
          <InfoTitle>相关影片</InfoTitle>
          {post?.length ? (
            <GetItem post={post} />
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 400,
                marginBottom: 80,
              }}
            >
              不幸的是，没有类似的视频这个视频！ 但我们正在努力 这个！
            </p>
          )}
        </div>
      </Wrapper>
      <NavBarModel />
    </>
  );
};
