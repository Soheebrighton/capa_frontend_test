import React, { useState } from "react";
import * as S from "./FilterMaterial.styles";

export default function FilterMaterial(props: any) {
  const materials: string[] = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  const [isOn, setIsOn] = useState(false);
  const [isMaterial, setIsMaterial] = useState(false);
  const [buttonEvent, setButtonEvent] = useState();
  const [isDefault, setIsDefault] = useState(true);
  // const [checkedList, setCheckedLists] = useState<string[]>([]);

  const onClickMaterial = (event: any) => {
    setIsMaterial((prev) => !prev);
    setButtonEvent(event.target);
  };

  const onChangedChecked = (el: any) => (event: any) => {
    if (event.target.checked) {
      props.setCheckedLists([...props.checkedList, el]);
    } else {
      props.setCheckedLists(
        props.checkedList.filter((keyword: any) => keyword !== el)
      );
    }
  };

  // window.addEventListener("click", (e) => handleClose(e));

  // const handleClose = (event: any) => {
  //   if (buttonEvent !== event.target) {
  //     setIsMaterial(false);
  //   } else {
  //     setIsMaterial(true);
  //   }
  // };
  return (
    <>
      <div>
        <S.Select onClick={onClickMaterial}>
          재료 <S.IconArrow />
        </S.Select>
        {isMaterial && (
          <S.SelectListWrapper1>
            {materials.map((el: string) => (
              <S.Option>
                <S.CheckOption
                  type="checkbox"
                  onChange={onChangedChecked(el)}
                  checked={props.checkedList.includes(el) ? true : false}
                />
                {el}
              </S.Option>
            ))}
          </S.SelectListWrapper1>
        )}
      </div>
    </>
  );
}
