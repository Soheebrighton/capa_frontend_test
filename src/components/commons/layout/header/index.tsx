import React, { useState } from "react";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../icons/CAPA.svg";
import { ReactComponent as Icon } from "../../icons/icon_company.svg";
import { breakPoints } from "../../../../commons/styles/media";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

const Wrapper = styled.header`
  background-color: #1565c0;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 40px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    padding: 0px 20px;
  }
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const TopLeft = styled.div``;

const Divider = styled.div`
  background-color: white;
  width: 2px;
  height: 16px;
  margin: 0px 32px 0px 32px;
`;
const Hamberger = styled(MenuIcon)`
  display: none;
  @media ${breakPoints.mobile} {
    display: inline;
    padding-right: 20px;
  }
`;

const Menu = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const MenuHeader = styled.div`
  padding: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;
`;

const MenuOption = styled.div`
  color: #323d45;
  font-weight: 500;
  padding: 0px 0px 20px 30px;
`;

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const onClickMenuOpen = () => {
    setOpenMenu(true);
  };

  return (
    <>
      <Wrapper>
        <TopLeft>
          <Hamberger onClick={onClickMenuOpen} />
          <Logo />
        </TopLeft>
        <TopRight>
          <Icon style={{ paddingRight: "8px", fill: "white" }} />
          가공업체
          <Divider />
          로그아웃
        </TopRight>
      </Wrapper>
      <div>
        <Drawer
          open={openMenu}
          anchor="left"
          onClose={() => setOpenMenu(false)}
        >
          <Menu>
            <MenuHeader>
              <img src={"/images/CAPA_partners_colorlogo 1.png"} alt="logo" />
            </MenuHeader>
            <MenuOption>
              <Icon style={{ paddingRight: "8px", fill: "#323d45" }} />
              파트너정밀가공
            </MenuOption>
            <MenuOption> 로그아웃</MenuOption>
          </Menu>
        </Drawer>
      </div>
    </>
  );
}
