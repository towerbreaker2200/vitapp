import styled from "styled-components";
import Categoryblock from "./categoryblock";

const Container = styled.div`
  width: 60%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function Category() {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <Categoryblock key={index} item={item} />
      ))}
    </Container>
  );
}

export default Category;
