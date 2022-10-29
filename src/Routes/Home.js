import Categoryblock from "../components/categoryblock";
import Banner from "../components/banner";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
function Home() {
  return (
    <div>
      <BannerContainer>
        <Banner />
      </BannerContainer>

      <Categoryblock />
    </div>
  );
}

export default Home;
