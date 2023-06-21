import styled from "styled-components";

export const CardBody = styled.div`
padding: 0.1rem 0 1rem;

 
@media (min-width: 767px) {
    padding: 1rem 1.5rem 2rem;  
  } 
`;

export const CardTitle = styled.h3`
  margin: 10px 20px;
  text-align: start;
  font-weight: 400;
  color: white;
`;


export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 243px;
  border-radius: 0px;
  object-fit: contain;
  object-position: center;
  box-shadow: var(--shadow);
  @media(min-width: 767px){
    height: 222px;
  }
`;

export const CardImageCategpry = styled.img`
  display: block;
  width: 100%;
  height: 143px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  @media(min-width: 767px){
    height: 222px;
  }
`;


export const NewCardBody = styled.div`
padding: 0.4rem 0 0.3rem;
@media (min-width: 767px) {
    padding: 1rem 1.5rem 2rem;  
  }
  
`;

export const NewCardTitle = styled.h3`
  margin: 0;
  text-align: center;
  /* font-size: var(--fs-bg); */
  font-weight: var(--fw-middle);
  color: white;
`;


export const NewCardImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 0;
  /* height: 203px; */
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;