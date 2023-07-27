import styled from "styled-components";

export const HeaderEl = styled.header`
  /* box-shadow: var(--shadow); */
  padding: 2px 0 4px 0;
  background: #192032;
  /* border-bottom: 1px solid var(--colors-btn); */
  display: flex;
  align-items: center;
  border-radius: 0 0 30px 30px;
  margin-bottom: 10px;
  @media(min-width: 1000px){
    display: none;
    margin-bottom: 10px;
  }

`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  /* font-size: var(--fs-logo); */
  /* color: var(--colors-btn); */
  /* font-weight: var(--fw-light:); */
  font-size: 30px;
  color: white;
  font-weight: 600;
`;

export const ModeCart = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  background: #000000);
  cursor: pointer;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;

  box-shadow: var(--shadow);
`;

export const CartPrice = styled.span`
  color: var(--colors-btn-hover);
  font-size: var(--fs-bg);
`;