import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./slide";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Container = styled.div`
  width: 75%;
  height: 40vh;
  display: inline-block;
  overflow-x: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

function Banner() {
  let index = 2;
  const [imgCnt, setImgCnt] = useState(0);
  const imgRef = useRef(null);
  const nextSlide = () => {
    if (imgCnt >= index) {
      setImgCnt(0);
    } else {
      setImgCnt(imgCnt + 1);
    }
  };
  const prevSlide = () => {
    if (imgCnt === 0) {
      setImgCnt(index);
    } else {
      setImgCnt(imgCnt - 1);
    }
  };
  useEffect(() => {
    imgRef.current.style.transition = "all 0.5s ease-in-out";
    imgRef.current.style.transform = `translateX(-${imgCnt}00%)`;
  }, [imgCnt]);

  return (
    <Container>
      <SliderContainer ref={imgRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
      </SliderContainer>
      <div className="btn">
        <button onClick={prevSlide} type="button" className="prev">
          prev
        </button>
        <button onClick={nextSlide} type="button" className="next">
          next
        </button>
      </div>
      <div className="auto">
        <button type="button" className="stop">
          stop
        </button>
        <button type="button" className="play">
          play
        </button>
      </div>
    </Container>
  );
}

export default Banner;
