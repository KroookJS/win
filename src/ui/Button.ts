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
  &:hover {
    background: var(--colors-btn-hover);
    border: 2px solid (--colors-btn-hover);
  }
`;

export const LinkStyle = { listStyle: "none", textDecoration: "none", color: "#005bff" };