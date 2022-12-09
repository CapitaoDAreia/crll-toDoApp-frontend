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
  const [_statusUpdate, setStatusUpdate] = React.useState(0);

  function updateTask(props: useUpdateDataProps) {
    axios
      .put(`${props.URL}${props.id}`, props.params)
      .then((resp) => setStatusUpdate(resp.status));
  }

  return { _statusUpdate, updateTask };
};

export default useUpdateTask;
