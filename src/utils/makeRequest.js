const axios = require('axios');

const makeRequest = async (BACKEND_URL,apiEndPoint, dynamicConfig = {}, navigate) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
    // headers: {
    //   authorization: "Bearer QWlzaHdhcnlhIE4=",
    // },
  };
  try {
    console.log(`req${JSON.stringify(requestDetails)}`);
    const { data } = await axios(requestDetails);
    console.log('hi');
    console.log(`data-mr${JSON.stringify(data)}`);
    return data;
  } catch (e) {
    if (navigate) {
      console.log('es1', e.response);
      const errorStatus = e.response?.status;
      console.log('es', errorStatus);
      if (errorStatus) {
        navigate(`/error/${errorStatus}`);
      } else {
        navigate('/error');
      }
    }
  }
};
module.exports= {makeRequest};
