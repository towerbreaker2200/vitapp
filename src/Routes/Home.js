import Category from "../components/category/categorycontainer";
import Banner from "../components/banner";
import styled from "styled-components";
import MainSearch from "../components/mainsearch";

const BannerContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const TopBtn = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  border-color: lightgrey;
  position: fixed;
  bottom: 24px;
  right: 24px;
`;

function Home() {
  const goTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <MainSearch />
      <Category />
      <TopBtn onClick={goTop}>↑</TopBtn>
    </div>
  );
}

export default Home;
