import axios from "axios";
import React from "react";

interface useUpdateDataProps {
  URL: string;
  id: string;
  params: {
    [key: string]: string | boolean;
  };
}

const useUpdateTask = () => {
  function updateData(props: useUpdateDataProps) {
    axios
      .put(`${props.URL}${props.id}`, props.params)
      .then((resp) => console.log(resp));
  }

  return [updateData];
};

export default useUpdateTask;
