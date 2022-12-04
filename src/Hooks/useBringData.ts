import axios, { AxiosResponse } from "axios";
import React from "react";

interface UseBringDataProps {
  URL: string;
}

const initialState: AxiosResponse<any, any> = {
  data: [{}],
  status: 0,
  statusText: "null",
  headers: {},
  config: {},
};

const useBringData = (props: UseBringDataProps) => {
  const [resState, setResState] =
    React.useState<AxiosResponse<any, any>>(initialState);

  React.useEffect(() => {
    axios.get(props.URL, {}).then((response) => {
      setResState(response);
      console.log(response)
    });
  }, []);

  return [resState];
};

export default useBringData;
