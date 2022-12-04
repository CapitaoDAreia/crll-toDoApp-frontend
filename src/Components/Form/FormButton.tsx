import { styled } from "@mui/material";
import axios from "axios";
import React from "react";
import { GlobalFormContext } from "./FormContext";

const Button = styled("button")({
  height: "35px",
  width: "80px",
  borderRadius: "0px 10px 10px 0px",
  border: "1px solid darkblue",
  background: "darkblue",
  color: "#FFFFFF",
  "&:hover": {
    cursor: "pointer",
    opacity: ".9",
  },
  "&:active": {},
});

interface ButtonProps {
  flag: string;
}

const FormButton = (props: ButtonProps) => {
  const { formtext, URL } = React.useContext(GlobalFormContext);

  function handlePostFormText() {
    axios
      .post(URL, { description: formtext })
      .then((resp) => console.log(resp.status));
  }

  return <Button onClick={() => handlePostFormText()}>{props.flag}</Button>;
};

export default FormButton;
