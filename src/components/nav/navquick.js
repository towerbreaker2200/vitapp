import styled from "styled-components";

const Quickbox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Navquick() {
  return (
    <Quickbox>
      <div>리뷰쓰기</div>
      <div>앱다운로드</div>
      <div>카카오톡 로그인</div>
    </Quickbox>
  );
}

export default Navquick;
