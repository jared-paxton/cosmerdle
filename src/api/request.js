export const baseURL = "http://localhost:4001/";

export const makeRequest = async (URL, requestOptions) => {
  return await fetch(URL, requestOptions).then((response) => {
    // if (response.status !== 200) {
    //   throw Error(`Invalid response code: ${response.status}`);
    // }

    return response.json();
  });
  // .then((json) => {
  //   console.log("makeRequest - json:", json);
  //   return { error: null, data: json };
  // })
  // .catch((e) => {
  //   console.log("makeRequest - error:", e);
  //   const err = Error(`Request failed: ${e}`);
  //   return { error: err, data: null };
  // });
};
