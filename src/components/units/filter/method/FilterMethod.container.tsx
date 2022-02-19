import React, { useState } from "react";
import * as S from "./FilterMethod.styles";

export default function FilterMethod(props: any) {
  const methods: string[] = ["밀링", "선반"];

  const [isOn, setIsOn] = useState(false);
  const [isMethod, setIsMethod] = useState(false);
  const [buttonEvent, setButtonEvent] = useState();
  const [checkedList, setCheckedLists] = useState<string[]>([]);

  const onClickMethod = (event: any) => {
    setIsMethod((prev) => !prev);
    setButtonEvent(event.target);
  };

  const onChangedChecked = (el: any) => (event: any) => {
    if (event.target.checked) {
      setCheckedLists([...checkedList, el]);
    } else {
      setCheckedLists(checkedList.filter((keyword: any) => keyword !== el));
    }
  };

  // window.addEventListener("click", (e) => handleClose(e));

  // const handleClose = (event: any) => {
  //   if (buttonEvent !== event.target) {
  //     setIsMethod(false);
  //   } else {
  //     setIsMethod(true);
  //   }
  // };

  return (
    <>
      <div>
        <S.Select onClick={onClickMethod}>
          가공방식 <S.IconArrow />
        </S.Select>
        {isMethod && (
          <S.SelectListWrapper1>
            {methods.map((el: string) => (
              <S.Option>
                <S.CheckOption
                  type="checkbox"
                  onChange={onChangedChecked(el)}
                  checked={checkedList.includes(el) ? true : false}
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
