import { Container } from "@/components/container";
import Link from "next/link";
import styled from "styled-components";


const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  background: #005bff;
  color: white;
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
