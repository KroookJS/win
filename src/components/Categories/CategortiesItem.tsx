import { WrapperArticle } from "@/ui/Wrraper";
import { CardBody, CardTitle } from "@/ui/CartStyle";
import styled from "styled-components";
import Link from "next/link";

const BlockFlex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 10px;
`;

export const CategortiesItem = ({
  title,
  imgUrl,
  _id,
}: {
  title: string;
  imgUrl: string;
  _id: string;
}) => {
  const newImgUrl = imgUrl ? imgUrl : "";
  return (
    <WrapperArticle>
      <Link href={`/category/${_id}`}>
        <CardBody>
          <BlockFlex>
            <img
              src={newImgUrl}
              alt="category img"
              style={{ width: 175, height: 95 }}
            />
            <CardTitle>{title}</CardTitle>
          </BlockFlex>
        </CardBody>
      </Link>
    </WrapperArticle>
  );
};
