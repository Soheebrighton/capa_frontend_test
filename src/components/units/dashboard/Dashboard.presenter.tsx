import React, { useEffect, useState } from "react";
import * as S from "./Dashboard.styles";
import Toggle from "../../commons/toggle/index";
import axios from "axios";
import List from "../list/List.container";

export default function Dashboard() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/db").then((data) => {
      setStores(data.data.requests);
    });
  }, []);

  console.log(stores);

  const onList = stores.filter((el: any) => el.status === "상담중");

  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.TopWrapper>
            <S.Title>들어온 요청</S.Title>
            <S.Remark>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.Remark>
          </S.TopWrapper>
          <S.OptionWrapper>
            <select>
              <option>가공방식</option>
            </select>
            <S.Toggles>
              <Toggle setIsOn={setIsOn} />
              <S.ToggleRemark>상담 중인 요청만 보기</S.ToggleRemark>
            </S.Toggles>
          </S.OptionWrapper>
          <S.ContainerWrapper>
            {!isOn && <List stores={stores} />}
            {isOn && <List stores={onList} />}
          </S.ContainerWrapper>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
