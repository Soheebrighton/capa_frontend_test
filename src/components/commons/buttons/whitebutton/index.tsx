import * as React from "react";
import styled from "@emotion/styled";

interface IPropsWhiteBtn {
  text: string;
}

const Wrapper = styled.div`
  cursor: pointer;
  color: #2196f3;
  width: max-content;
  background-color: white;
  border: 1px solid #2196f3;
  border-radius: 4px;
  padding: 6px 12px 6px 12px;
  text-align: center;
  font-weight: 500;
`;

export default function WhiteBtn(props: IPropsWhiteBtn) {
  return (
    <>
      <Wrapper>{props.text}</Wrapper>
    </>
  );
}
