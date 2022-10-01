import Navmenu from "./navmenu";
import Navquick from "./navquick";
import Navsearch from "./navsearch";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 64px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Menu = styled.div`
  margin-left: 20px;
`;

const Search = styled.div``;

const Quick = styled.div`
  margin-right: 20px;
`;

function Navbar() {
  return (
    <Nav>
      <Menu>
        <Navmenu />
      </Menu>
      <Search>
        <Navsearch />
      </Search>
      <Quick>
        <Navquick />
      </Quick>
    </Nav>
  );
}

export default Navbar;
