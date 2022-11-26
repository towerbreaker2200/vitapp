import styled from "styled-components";
import QAblock from "./QAblock";

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
`;

function QACategory() {
  return (
    <Container>
      <Context1>지금 인기있는 질문</Context1>
      <Context2>전문가가 직접 답해드려요!</Context2>
      {[
        {
          tag: "영양제조합",
          title: "제목",
          question: "내용",
          answer: "답변",
          PI: "이00 30대/남",
        },
      ].map((item, index) => (
        <QAblock item={item} key={index} />
      ))}
    </Container>
  );
}

export default QACategory;
