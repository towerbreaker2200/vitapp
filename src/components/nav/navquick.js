import { Link } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Quickbox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Navquick({ isLoggedIn }) {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <Quickbox>
      <div>리뷰쓰기</div>
      <div>앱다운로드</div>
      <div>프로필</div>
      {isLoggedIn ? (
        <div>
          <button onClick={onLogOutClick}>로그아웃</button>
        </div>
      ) : (
        <div>
          <Link to="/login">로그인</Link>
        </div>
      )}
    </Quickbox>
  );
}

export default Navquick;
