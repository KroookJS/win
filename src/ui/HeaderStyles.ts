import styled from "styled-components";

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  padding: 7px 0;
  margin-bottom: 20px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  font-size: var(--fs-logo);
  color: var(--colors-btn);
  font-weight: var(--fw-light:);
`;

export const ModeCart = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  background: var(--colors-bg-cart);
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