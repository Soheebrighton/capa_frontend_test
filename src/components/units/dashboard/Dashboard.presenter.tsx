import React from "react";
import * as S from "./Dashboard.styles";
import Toggle from "../../commons/toggle/index";

export default function Dashboard() {
  const jsonServer = require("json-server");
  const server = 
  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.TopWrapper>
            <S.Title>들어온 요청</S.Title>
            <S.Remark>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.Remark>
          </S.TopWrapper>
          <S.OptionWrapper>
            <S.Toggles>
              <Toggle />
              <S.ToggleRemark>상담 중인 요청만 보기</S.ToggleRemark>
            </S.Toggles>
          </S.OptionWrapper>
          <S.Container></S.Container>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
