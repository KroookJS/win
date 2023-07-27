import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radii);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;
`;

export const ButtonBy = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  width: 100%;
  transition: ease-in 0.2s;
  
  font-size: var(--fs-normal);
  font-weight: var(--fw-bold);
  
  color: var(--colors-bg);
  border: 2px solid var(--colors-btn-border);
  border-radius: var(--radii);
  background: var(--colors-btn);
  /* background-image: linear-gradient( to right top, #ffc600 20%, #62a75bab, #27b319 80%); */
  background-image: linear-gradient(90deg, #cfecd0, #ffc5ca);
  color: #474242;
`;

export const ButtonNext = styled(ButtonBy)`
  background-image: linear-gradient(90deg,#cfecd0,#0072ff);
  color: white;
  width: 93%;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  justify-content: center;
  margin: 15px auto;
`

export const ButtonCategoryPage = styled(ButtonNext)`
  
  background-image: linear-gradient(90deg,#080808,#49306b);
  color: white;
  border-radius: 6px;
  box-shadow: 2px 2px 15px #c5a67cb8;
  max-width: 200px;

  position: absolute;
    right: 24px;
`

export const CustomButtonPaginationNext = styled(ButtonCategoryPage)`
  background-image: linear-gradient(90deg,#f8d265f2,#ffa31b);
`
export const CustomButtonPaginationBack = styled(ButtonCategoryPage)`
  background-image: linear-gradient(270deg,#080808f2,#987b4f);
`
export const ButtonDelete = styled(ButtonBy)`
  background-image: linear-gradient(90deg,#cfecd0,#e40014);
`
export const LinkStyle = { listStyle: "none", textDecoration: "none", color: "#005bff" };