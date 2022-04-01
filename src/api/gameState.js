// TODO: add Bearer header for authorization when needed
import { baseURL } from "./request";

export const fetchGameState = async () => {
  const requestOptions = {
    method: "GET",
  };

  return await (await fetch(baseURL, requestOptions)).json();
};
