import * as React from "react";
import * as S from "./Dashboard.styles";
import Toggle from "../../commons/toggle/index";
import List from "../list/List.container";
import { IPropsDashboardUI } from "./Dashboard.types";

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
                  가공방식
                  <S.IconArrow />
                </S.Select>
                {props.isMethod && (
                  <S.SelectListWrapper1>
                    {props.methods.map((el: string) => (
                      <S.Option>
                        <S.CheckOption
                          type="checkbox"
                          onChange={props.onChangedMethodChecked(el)}
                          checked={
                            props.methodsCheckedList.includes(el) ? true : false
                          }
                          id="methodActive"
                        />
                        {el}
                      </S.Option>
                    ))}
                  </S.SelectListWrapper1>
                )}
              </div>

              <div>
                <S.Select onClick={props.onClickMaterial}>
                  재료
                  {props.materialsCheckedList.length > 0 &&
                    `(${props.materialsCheckedList.length})`}
                  <S.IconArrow />
                </S.Select>
                {props.isMaterial && (
                  <S.SelectListWrapper2>
                    {props.materials.map((el: any) => (
                      <S.Option>
                        <S.CheckOption
                          type="checkbox"
                          onChange={props.onChangedMaterialChecked(el)}
                          checked={
                            props.materialsCheckedList.includes(el)
                              ? true
                              : false
                          }
                          id="materialActive"
                        />
                        {el}
                      </S.Option>
                    ))}
                  </S.SelectListWrapper2>
                )}
              </div>

              {!(
                props.materialsCheckedList.length === 0 &&
                props.methodsCheckedList.length === 0
              ) && (
                <S.RefreshBtn onClick={props.onClickRefresh}>
                  <S.IconRefresh />
                  <S.RefreshTxt>필터링 리셋</S.RefreshTxt>
                </S.RefreshBtn>
              )}
            </S.Selections>

            <S.Toggles>
              <Toggle setIsOn={props.setIsOn} />
              <S.ToggleRemark>상담 중인 요청만 보기</S.ToggleRemark>
            </S.Toggles>
          </S.OptionWrapper>
          <S.ContainerWrapper>
            {props.isOn
              ? props.methodsCheckedList.length === 0 &&
                props.materialsCheckedList.length === 0 && (
                  <List stores={props.onList} />
                )
              : props.methodsCheckedList.length === 0 &&
                props.materialsCheckedList.length === 0 && (
                  <List stores={props.stores} />
                )}

            {props.isOn
              ? props.methodsCheckedList.length > 0 &&
                props.materialsCheckedList.length === 0 && (
                  <List
                    stores={props.stores.filter((el: any) =>
                      props.methodsCheckedList.some(
                        (a: any) =>
                          el.method.includes(a) && el.status === "상담중"
                      )
                    )}
                  />
                )
              : props.methodsCheckedList.length > 0 &&
                props.materialsCheckedList.length === 0 && (
                  <List
                    stores={props.stores.filter((el: any) =>
                      props.methodsCheckedList.some((a: any) =>
                        el.method.includes(a)
                      )
                    )}
                  />
                )}

            {props.isOn
              ? props.materialsCheckedList.length > 0 &&
                props.methodsCheckedList.length === 0 && (
                  <List
                    stores={props.stores.filter((el: any) =>
                      props.materialsCheckedList.some(
                        (a: any) =>
                          el.material.includes(a) && el.status === "상담중"
                      )
                    )}
                  />
                )
              : props.materialsCheckedList.length > 0 &&
                props.methodsCheckedList.length === 0 && (
                  <List
                    stores={props.stores.filter((el: any) =>
                      props.materialsCheckedList.some((a: any) =>
                        el.material.includes(a)
                      )
                    )}
                  />
                )}

            {props.isOn
              ? props.materialsCheckedList.length > 0 &&
                props.methodsCheckedList.length > 0 && (
                  <List
                    stores={props.stores.filter((el: any) =>
                      props.materialsCheckedList.some(
                        (a: any) =>
                          props.methodsCheckedList.some((a: any) =>
                            el.method.includes(a)
                          ) &&
                          props.materialsCheckedList.some((a: any) =>
                            el.material.includes(a)
                          ) &&
                          el.status === "상담중"
                      )
                    )}
                  />
                )
              : props.materialsCheckedList.length > 0 &&
                props.methodsCheckedList.length > 0 && (
                  <List
                    stores={props.stores.filter((el: any) =>
                      props.materialsCheckedList.some(
                        (a: any) =>
                          props.methodsCheckedList.some((a: any) =>
                            el.method.includes(a)
                          ) &&
                          props.materialsCheckedList.some((a: any) =>
                            el.material.includes(a)
                          )
                      )
                    )}
                  />
                )}
          </S.ContainerWrapper>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
