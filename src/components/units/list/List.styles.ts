import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  width: 100%;

  /* background-color: yellow; */
`;

export const Container = styled.div`
  height: 332px;
  width: 350px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  margin: 0px 16px 16px 0px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  :hover {
    border: 2px solid #2196f3;
  }
`;

export const TopContents = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;
`;

export const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Status = styled.div`
  border: 1px solid #ffa000;
  width: max-content;
  color: #ffa000;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
`;

export const Client = styled.div``;

export const Date = styled.div`
  padding-top: 24px;
  color: #939fa5;
`;

export const BottomContents = styled.div``;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const TitleContent = styled.div`
  width: 70px;
  padding-right: 32px;
`;

export const DetailContent = styled.div`
  font-weight: 700;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-bottom: 24px; */
`;
