import axios from "axios";
import React from "react";

interface useDeleteTaskProps {
  URL: string;
  id: string;
}

const useDeleteTask = () => {
  const [statusDelete, setStatusDelete] = React.useState(0);

  function deleteTask(props: useDeleteTaskProps) {
    axios
      .delete(`${props.URL}${props.id}`)
      .then((resp) => setStatusDelete(resp.status));
  }

  return { statusDelete, deleteTask };
};

export default useDeleteTask;
