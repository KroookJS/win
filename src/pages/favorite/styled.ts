import styled from "styled-components";

export const TitleHotNew = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`;

export const BlockVideo = styled.div`
  width: 100%;

  height: 81vh;
  text-align: center;
  margin: 20px auto 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #222222;
  border-radius: 35px 35px 0 0;
  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const PText = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;