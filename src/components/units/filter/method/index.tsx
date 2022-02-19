import React, { useState } from "react";
import styled from "@emotion/styled";
import { ReactComponent as Arrow } from "../../../commons/icons/arrow_drop_down.svg";
const IconArrow = styled(Arrow)`
  padding-left: 8px;
  fill: #939fa5;
  :focus {
    fill: white;
  }
`;

const Select = styled.button`
  width: 98px;
  height: 32px;
  padding: 4px 12px;
  margin-right: 8px;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;

  :hover {
    border: 1px solid #2196f3;
    cursor: pointer;
  }
  :focus {
    background-color: #1565c0;
    color: white;
    fill: white;
  }
`;

const SelectListWrapper1 = styled.div`
  width: 130px;
  border-radius: 4px;
  border: 1px solid #939fa5;
  position: absolute;
  background-color: white;
  padding: 17px 12px 9px 12px;
  box-sizing: border-box;
`;

const Option = styled.div`
  padding-bottom: 8px;
`;
const CheckOption = styled.input`
  border: 2px solid #939fa5;
  :focus {
    background-color: red;
  }
  margin-right: 10px;
`;
const Selections = styled.div``;

export default function FilterMethod() {
  const [isOn, setIsOn] = useState(false);
  const [isMethod, setIsMethod] = useState(false);
  const [isMaterial, setIsMaterial] = useState(false);
  const [buttonEvent, setButtonEvent] = useState();

  const onClickMethod = (event: any) => {
    setIsMethod((prev) => !prev);
    setButtonEvent(event.target);
  };

  window.addEventListener("click", (e) => handleClose(e));

  const handleClose = (event: any) => {
    if (buttonEvent !== event.target) {
      setIsMethod(false);
    } else {
      setIsMethod(true);
    }
  };

  return (
    <>
      <div>
        <Select onClick={onClickMethod}>
          가공방식 <IconArrow />
        </Select>
        {isMethod && (
          <SelectListWrapper1>
            <Option>
              <CheckOption type="checkbox" />
              asfoij
            </Option>
          </SelectListWrapper1>
        )}
      </div>
    </>
  );
}
