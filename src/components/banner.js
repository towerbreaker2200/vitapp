import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 20vh;
  background-color: red;
`;

function Banner() {
  let index = 4;
  const [pageCnt, setPageCnt] = useState(0);
  let isMoving = false;
  const colorset = ["red", "green", "blue", "yellow"];

  return (
    <Container>
      <div class="btn">
        <button type="button" class="prev">
          prev
        </button>
        <button type="button" class="next">
          next
        </button>
      </div>
      <div class="auto">
        <button type="button" class="stop">
          stop
        </button>
        <button type="button" class="play">
          play
        </button>
      </div>
    </Container>
  );
}

export default Banner;
