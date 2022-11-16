import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 16px;
`;

function MainSearch() {
  return (
    <Container>
      어떤 제품을 찾으시나요?
      <input placeholder="제품명, 영양성분, 건강고민을 선택해보세요!"></input>
    </Container>
  );
}

export default MainSearch;
