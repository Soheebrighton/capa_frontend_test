import styled from "@emotion/styled";
import { ReactComponent as Refresh } from "../../commons/icons/refresh.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { breakPoints } from "../../../commons/styles/media";
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
  display: grid;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 750px;
  }
  @media ${breakPoints.mobile} {
    width: min-content;
  }
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
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  color: #565656;
  :hover {
    border: 1px solid #2196f3;
    cursor: pointer;
  }
  :focus {
    background-color: #1565c0;
    color: #fff;
  }
`;
export const IconArrow = styled(ArrowDropDownIcon)``;

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
  z-index: 1;
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

  @media ${breakPoints.mobile} {
    padding-top: 20px;
  }
`;

export const ToggleRemark = styled.div``;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
