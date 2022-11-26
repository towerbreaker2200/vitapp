import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 40px 0px;
`;

const Context1 = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Context2 = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const LinkImg = styled.div`
  width: 100%;
  height: 60px;
  background-color: lightgrey;
`;

function HscreenUpload() {
  return (
    <Container>
      <Context1>건강검진으로 영양제 추천받기</Context1>
      <Context2>
        10년치 국가 건강검진 데이터를 바탕으로 영양제를 추천해드려요!
      </Context2>
      <Link to="/">
        <LinkImg />
      </Link>
    </Container>
  );
}

export default HscreenUpload;
