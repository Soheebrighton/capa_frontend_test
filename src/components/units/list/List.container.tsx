import * as React from "react";
import * as S from "./List.styles";
import ColorBtn from "../../commons/buttons/colorbutton";
import WhiteBtn from "../../commons/buttons/whitebutton";

interface IPropsList {
  stores: any[];
}

export default function List(props: IPropsList) {
  const countList: number = props.stores.length;

  return (
    <>
      {props.stores.map((el: any) => (
        <S.Container key={el}>
          <S.TopContents>
            <S.ItemTitle>
              {el.title}
              {el.status === "상담중" && <S.Status>{el.status}</S.Status>}
            </S.ItemTitle>
            <S.Client>{el.client}</S.Client>
            <S.Date>{el.due}까지 납기</S.Date>
          </S.TopContents>
          <S.BottomContents>
            <S.Details>
              <S.TitleContent>도면개수</S.TitleContent>
              <S.DetailContent>{el.count}개</S.DetailContent>
            </S.Details>
            <S.Details>
              <S.TitleContent>총 수량</S.TitleContent>
              <S.DetailContent>{el.amount}개</S.DetailContent>
            </S.Details>
            <S.Details>
              <S.TitleContent>가공방식</S.TitleContent>
              <S.DetailContent>
                {el.method.length !== 1
                  ? el.method.map((el: string, index: number) =>
                      index !== el.length - 1 ? el + "," : el
                    )
                  : el.method.map((el: string) => el)}
              </S.DetailContent>
            </S.Details>
            <S.Details>
              <S.TitleContent>재료</S.TitleContent>
              <S.DetailContent>{el.material}</S.DetailContent>
            </S.Details>
          </S.BottomContents>
          <S.Buttons>
            <ColorBtn text="요청 내역 보기" />
            <WhiteBtn text="채팅하기" />
          </S.Buttons>
        </S.Container>
      ))}
      {countList === 0 && (
        <S.EmptyContainer>조건에 맞는 견적 요청이 없습니다.</S.EmptyContainer>
      )}
    </>
  );
}
