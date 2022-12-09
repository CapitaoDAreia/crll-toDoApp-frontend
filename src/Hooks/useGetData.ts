import axios, { AxiosResponse } from "axios";
import React from "react";

interface UseGetDataProps {
  URL: string;
}

const initialState: AxiosResponse<any, any> = {
  data: [{}],
  status: 0,
  statusText: "null",
  headers: {},
  config: {},
};

const useGetData = (props: UseGetDataProps) => {
  const [resState, setResState] = React.useState<AxiosResponse<any, any>>(initialState);
  React.useEffect(() => {
    axios.get(props.URL, {}).then((response) => {
      setResState(response);
    });
  }, []);

  return [resState];
};

export default useGetData;
