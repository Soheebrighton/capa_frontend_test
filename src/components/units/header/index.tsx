import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../commons/icons/CAPA.svg";
import { ReactComponent as Icon } from "../../commons/icons/icon_company.svg";

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
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: row;
`;

const TopLeft = styled.div``;

const Divider = styled.div`
  background-color: white;
  width: 2px;
  height: 16px;
  margin: 0px 32px 0px 32px;
`;

export default function Header() {
  return (
    <>
      <Wrapper>
        <TopLeft>
          <Logo />
        </TopLeft>
        <TopRight>
          <Icon style={{ paddingRight: "8px" }} />
          가공업체
          <Divider />
          로그아웃
        </TopRight>
      </Wrapper>
    </>
  );
}
