import * as React from "react";
import styled from "@emotion/styled";

interface IPropsColorBtn {
  text: string;
}

const Wrapper = styled.div`
  cursor: pointer;
  color: white;
  width: max-content;
  background-color: #2196f3;
  border-radius: 4px;
  padding: 6px 12px 6px 12px;
  text-align: center;
  font-weight: 500;
  margin-right: 8px;
`;

export default function ColorBtn(props: IPropsColorBtn) {
  return (
    <>
      <Wrapper>{props.text}</Wrapper>
    </>
  );
}
