import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

interface IPropsToggle {
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle(props: IPropsToggle) {
  const handleChange = () => {
    props.setIsOn((prev) => !prev);
  };

  return (
    <div>
      <Switch {...label} onChange={handleChange} />
    </div>
  );
}
