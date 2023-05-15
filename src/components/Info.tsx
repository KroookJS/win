import styled from "styled-components";
import { TItemProduct } from "@/types/Product";
import { ButtonBy } from "@/ui/Button";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
    max-width: var(--width-mx);
    margin: 0 auto;
  }
`;

const InfoImage = styled.img`
  display: block;
  border-radius: var(--radii);
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Info = (props: TItemProduct) => {
  const { title, description, thumbnail, price, rating, brand, category } =
    props;

  return (
    <Wrapper>
      <InfoImage src={thumbnail} alt={title} />

      <div>
        <InfoTitle>{title}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {title}
            </ListItem>
            <ListItem>
              <b>Description</b> {description}
            </ListItem>
            <ListItem>
              <b>Rating:</b> {rating}
            </ListItem>
            <ListItem>
              <b>Category:</b> {category}
            </ListItem>
            <ListItem>
              <b>Brand:</b> {brand}
            </ListItem>
            <ListItem>
              <ButtonBy>
                <b>Price:</b> {price} $
              </ButtonBy>
            </ListItem>
          </List>
        </ListGroup>
      </div>
    </Wrapper>
  );
};
