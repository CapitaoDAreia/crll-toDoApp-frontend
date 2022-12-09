import axios from "axios";
import React from "react";
import { GlobalFormContext } from "../Components/Form/FormContext";

const usePostData = () => {
  const { formtext, URL } = React.useContext(GlobalFormContext);

  function handlePostFormText() {
    axios
      .post(URL, { description: formtext })
      .then((resp) => console.log(resp.status));
  }

  return [handlePostFormText];
};

export default usePostData;
