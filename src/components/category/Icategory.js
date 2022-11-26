import { Link } from "react-router-dom";
import styled from "styled-components";
import Categoryblock from "./categoryblock";

const Container = styled.div`
  width: 60%;
  margin: 40px 0px;
`;

const BlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Context1 = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkContext = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ICategory() {
  return (
    <Container>
      <Context1>인기성분이에요</Context1>
      <BlockContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Categoryblock key={index} item={item} />
        ))}
      </BlockContainer>
      <LinkContext>
        <Link to="/">인기성분 더 보기</Link>
      </LinkContext>
    </Container>
  );
}

export default ICategory;
