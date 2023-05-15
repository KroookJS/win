import { Container } from "@/ui/container";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;

  border-radius: var(--radii);
  background: var(--colors-btn);
  color: var(--colors-bg);
  font-size: var(--fs-bg);
  font-weight: var(--fw-light);

  cursor: pointer;
`;

export const ButtonCategotyes = () => {
  return (
    <Container>
      <Link href="/categories">
        <Button>Все Категории</Button>
      </Link>
    </Container>
  );
};
