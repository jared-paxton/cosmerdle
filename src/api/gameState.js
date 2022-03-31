// TODO: add Bearer header for authorization when needed
import { makeRequest } from "./request";

export const getGameState = async (baseURL) => {
  const requestOptions = {
    method: "GET",
  };

  try {
    const response = await makeRequest(baseURL, requestOptions);

    return { error: response.error, gameStateData: response.data };
  } catch (e) {
    return { error: e, gameStateData: null };
  }
};
