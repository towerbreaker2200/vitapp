import styled from "styled-components";

const Block = styled.div`
  width: 160px;
  height: 160px;
  margin: 16px;
  border-radius: 8px;
  background-color: lightgray;
`;

function Categoryblock({ item }) {
  return <Block>{item}</Block>;
}

export default Categoryblock;
