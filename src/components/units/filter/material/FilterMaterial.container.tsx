import * as React from "react";
import * as S from "./FilterMaterial.styles";

export default function FilterMaterial() {
  return (
    <>
      <div>
        <S.Select>
          재료 <S.IconArrow />
        </S.Select>
        <S.SelectListWrapper1>
          <S.Option>
            <S.CheckOption type="checkbox" />
            asfoij
          </S.Option>
        </S.SelectListWrapper1>
      </div>
    </>
  );
}
