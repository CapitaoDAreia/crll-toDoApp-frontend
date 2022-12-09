import { styled } from "@mui/material";
import usePostData from "../../Hooks/usePostData";

const Button = styled("button")({
  height: "35px",
  flex: "1",
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
  const [handlePostFormText] = usePostData();

  return <Button onClick={() => handlePostFormText()}>{props.flag}</Button>;
};

export default FormButton;
