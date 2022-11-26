import styled from "styled-components";

const Block = styled.div`
  width: 100%;
  margin: 16px 0px;
  border-radius: 8px;
  box-shadow: 0px 0px 1px 2px lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Category = styled.div`
  margin: 10px 20px;
`;
const Title = styled.div`
  margin: 10px 20px;
`;
const Question = styled.div`
  margin: 10px 20px;
`;
const Answer = styled.div`
  margin: 10px 20px;
`;
const UserInfo = styled.div`
  margin: 10px 20px;
`;

function QAblock({ item }) {
  return (
    <Block>
      <Category>{item.tag}</Category>
      <Title>{item.title}</Title>
      <Question>{item.question}</Question>
      <Answer>{item.answer}</Answer>
      <UserInfo>{item.PI}</UserInfo>
    </Block>
  );
}

export default QAblock;
