import styled from "styled-components";

export const ContainerProfileHead = styled.div`
  background: #27262b;
  height: 261px;
  position: relative;
  top: -20px;
  z-index: -1;
`;

export const Column = styled.div`
  padding: 2.3rem 1rem 0.3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  positon: reletive;
`;

export const LeftBlockSave = styled.div`
  width: 140px;
  height: 80px;
  border-radius: 30px 0 0 30px;

  background-image: linear-gradient(
    to right,
    #ffa31b 17%,
    #5c503a,
    #3e383a 80%
  );
  position: absolute;
  right: 55%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvaCenter = styled.img`
  width: 118px;
  height: 118px;
  object-fit: cover;
  border: 6px solid #383338;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 1px 10px #ffd;
`;

export const RightBlockLike = styled.div`
  width: 140px;
  height: 80px;
  border-radius: 0px 30px 30px 0px;
  /* background-image: linear-gradient(to left, #962d50 7%, #603a46, #3e383a 80%); */
  background-image: linear-gradient(to left, #ffa31b 1%, #5c503a, #3e383a 80%);
  position: absolute;
  left: 55%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlockInfoStatick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: reletive;
`;
export const TextStatickBorder = styled.h5`
  font-size: 19px;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #544a36;
`;
export const TextStatick = styled(TextStatickBorder)`
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #979184;
`;

export const BlockIconRight = styled.div`
  padding: 3px;
  background: #e51c59;
  position: absolute;
  left: 89%;
  top: 34%;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #2a212b;
`;
export const BlockIconLeft = styled(BlockIconRight)`
  left: -10%;
  background: #ffbd1f;
`;

export const NameProfile = styled(TextStatickBorder)`
  text-align: center;
  font-size: 22px;
  padding: 0;
  border: none;
`;
export const TagName = styled.h5`
  text-align: center;
  color: var(--colors-btn);
  font-size: 15px;
`;

export const ContainerProfileBody = styled.div`
  background: #19191b;
  min-height: 54vh;
  position: relative;
  top: -48px;
  border-radius: 50px 50px 0 0;
  box-shadow: 0px -34px 70px #ffffdd59;
`;
export const PublicTitle = styled(TextStatickBorder)`
  text-align: center;
  font-size: 16px;
  padding: 13px 0;
  border-bottom: 3px solid #fff;
  max-width: fit-content;
  margin: 0 20px 13px;
`;

export const WrapperProfileColumn = styled.section`
  width: 100%;
  padding: 0rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    padding: 0.8rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    max-width: var(--width-mx);
    margin: 0 auto;
    padding: 0.5rem;
  }
`;
export const ImgPost = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 7px;
  object-fit: cover;
  @media(min-width: 768px){
    height: 192px;
  }
  @media(min-width: 1024px){
    height: 210px;
  }
`;