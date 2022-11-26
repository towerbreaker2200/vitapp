import ICategory from "../components/category/Icategory";
import Banner from "../components/banner";
import styled from "styled-components";
import MainSearch from "../components/mainsearch";
import HCategory from "../components/category/Hcategory";
import HscreenUpload from "../components/HscreenUpload";
import QACategory from "../components/category/QAcategory";

const Mainbody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <Mainbody>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <MainSearch />
      <ICategory />
      <HscreenUpload />
      <HCategory />
      <QACategory />
      <TopBtn onClick={goTop}>↑</TopBtn>
    </Mainbody>
  );
}

export default Home;
