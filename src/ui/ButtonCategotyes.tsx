import { Container } from "@/ui/container";
import Link from "next/link";
import styled from "styled-components";
import { LinkStyle } from "./Button";

const Button = styled.button`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border: none;
  border-radius: var(--radii);
  background: var(--colors-btn);
  color: var(--colors-bg);
  font-size: var(--fs-bg);
  font-weight: var(--fw-light);

  cursor: pointer;

  /*  background-image: linear-gradient(
    to right top,
    #ffc600 20%,
    #62a75bab,
    #27b319 80%
  ); */
  background-image: linear-gradient(90deg, #cfecd0, #ffc5ca);
  color: #474242;
`;

export const ButtonCategotyes = () => {
  return (
    <Container>
      <Link href="/category" style={LinkStyle}>
        <Button>Все Категории</Button>
      </Link>
    </Container>
  );
};
