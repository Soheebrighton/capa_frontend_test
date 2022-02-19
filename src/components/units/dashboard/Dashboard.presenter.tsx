import * as React from "react";
import * as S from "./Dashboard.styles";
import Toggle from "../../commons/toggle/index";
import List from "../list/List.container";
import { IPropsDashboardUI } from "./Dashboard.types";
import FilterMaterial from "../filter/material/FilterMaterial.container";
import FilterMethod from "../filter/method";

export default function DashboardUI(props: IPropsDashboardUI) {
  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.TopWrapper>
            <S.Title>들어온 요청</S.Title>
            <S.Remark>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.Remark>
          </S.TopWrapper>
          <S.OptionWrapper>
            <S.Selections>
              <div>
                <S.Select onClick={props.onClickMethod}>
                  가공방식 <S.IconArrow />
                </S.Select>
                {props.isMethod && (
                  <S.SelectListWrapper1>
                    {props.methods.map((el: string) => (
                      <S.Option>
                        <S.CheckOption
                          type="checkbox"
                          onChange={props.onChangedChecked(el)}
                          checked={
                            props.checkedList.includes(el) ? true : false
                          }
                        />
                        {el}
                      </S.Option>
                    ))}
                  </S.SelectListWrapper1>
                )}

                <S.Select onClick={props.onClickMaterial}>
                  재료 <S.IconArrow />
                </S.Select>
              </div>
              <div>
                {props.isMaterial && (
                  <S.SelectListWrapper2>
                    {props.materials.map((el: any) => (
                      <S.Option>
                        <S.CheckOption
                          type="checkbox"
                          onChange={props.onChangedChecked(el)}
                        />
                        {el}
                      </S.Option>
                    ))}
                  </S.SelectListWrapper2>
                )}
              </div>
              <FilterMethod /> <FilterMaterial />
            </S.Selections>

            <S.Toggles>
              <Toggle setIsOn={props.setIsOn} />
              <S.ToggleRemark>상담 중인 요청만 보기</S.ToggleRemark>
            </S.Toggles>
          </S.OptionWrapper>
          <S.ContainerWrapper>
            {!props.isOn && props.checkedList.length !== 0 && (
              <List
                stores={props.stores.filter(
                  (el: any) =>
                    // el.method.some((a: any) => checkedList.includes(a))
                    props.checkedList.some((a: any) => el.method.includes(a)) &&
                    props.checkedList.some((a: any) => el.material.includes(a))
                )}
              />
            )}
            {!props.isOn && props.checkedList.length === 0 && (
              <List stores={props.stores} />
            )}
            {props.isOn && <List stores={props.onList} />}
          </S.ContainerWrapper>

          <S.EmptyContainer>조건에 맞는 견적 요청이 없습니다.</S.EmptyContainer>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
