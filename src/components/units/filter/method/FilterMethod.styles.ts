import styled from "@emotion/styled";
import { ReactComponent as Arrow } from "../../../commons/icons/arrow_drop_down.svg";

export const IconArrow = styled(Arrow)`
  padding-left: 8px;
  fill: #939fa5;
  :focus {
    fill: white;
  }
`;

export const Select = styled.button`
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

export const SelectListWrapper1 = styled.div`
  width: 130px;
  border-radius: 4px;
  border: 1px solid #939fa5;
  position: absolute;
  background-color: white;
  padding: 17px 12px 9px 12px;
  box-sizing: border-box;
`;

export const Option = styled.div`
  padding-bottom: 8px;
`;
export const CheckOption = styled.input`
  border: 2px solid #939fa5;
  :focus {
    background-color: red;
  }
  margin-right: 10px;
`;
export const Selections = styled.div``;
