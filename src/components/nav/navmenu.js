import styled from "styled-components";

const Menubox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Navmenu() {
  return (
    <Menubox>
      <div>menu</div>
      <div>Logo</div>
    </Menubox>
  );
}

export default Navmenu;
