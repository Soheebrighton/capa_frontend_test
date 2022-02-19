import styled from "@emotion/styled";
import { ReactComponent as Arrow } from "../../commons/icons/arrow_drop_down.svg";
import { ReactComponent as Refresh } from "../../commons/icons/refresh.svg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1100px;
  padding-top: 40px;
  color: #323d45;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Remark = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 32px 0px;
`;

export const IconArrow = styled(Arrow)`
  padding-left: 12px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
  width: 98px;
  border-radius: 4px;
  border: 1px solid #939fa5;
  position: absolute;
  background-color: white;
  padding: 17px 12px 9px 12px;
  box-sizing: border-box;
`;

export const SelectListWrapper2 = styled.div`
  width: 140px;
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
export const Selections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconRefresh = styled(Refresh)`
  padding: 0px 10px;
`;

export const RefreshBtn = styled.div`
  color: #2196f3;
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

export const Toggles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
`;

export const ToggleRemark = styled.div``;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
