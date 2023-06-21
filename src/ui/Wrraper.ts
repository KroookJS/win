import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
  border-radius: 30px;
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    padding: 0.8rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    max-width: var(--width-mx);
    margin: 0 auto;
    padding: 2rem 1rem;
  }
`;



export const WrapperColum = styled(Wrapper)`

  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2.5rem 0;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 0.5rem;
    gap: 0.4rem;

    
  }

`
export const WrapperSliderRecomendation = styled(WrapperColum)`
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.6rem;
    padding: 0.5rem 1rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const WraaperDeskTop = styled(WrapperColum)`
padding: 0 0 5.5rem 0;
@media (min-width: 1024px) {
    max-width: 1240px;
  }
`

export const WrapperArticle = styled.div`
  display: flex;
  flex-direction: column;
  heigth: 100px;
  
  overflow: hidden;
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  /* border: 1px solid #000; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 1px 10px;
  border-bottom: 1px solid #ffffff17;
  cursor: pointer;
  transition: ease-in 0.2s;

  padding: 16px 0;
  border-radius: 25px;

  /* &:hover {
    border: 1px solid var(--colors-btn);
  } */
`;

export const WrapperArticleNewCategory = styled.div`
position: relative;
 /*  &:hover {
    border: 1px solid var(--colors-btn);
  } */
`


export const  WrapperArticleRecomendation = styled(WrapperArticle)`
 max-height: 391px
 @media (min-width: 1024px) {
  max-height: 318px; 
  padding: 0rem 0.5rem;
 /*  &:hover {
    border: 1px solid linear-gradient(to right top,#ffc600 20%,#ff0040,#e600cc 80%);
  } */
 }
 
`

export const WrapperCart = styled(Wrapper)`
  padding: 1rem 0 5.5rem;
` 

export const WrapperForm = styled.div`

  
  
  background: #fff;
  color: black;
  max-width: var(--width-mx);
  margin: 0 auto;
  padding: 2rem 1rem;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
` 

