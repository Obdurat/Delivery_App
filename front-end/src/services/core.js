import axios from 'axios';

async function request(
  resource,
  successCode,
  method,
  data,
) {
  const result = {};

  const { body, headers } = data;

  const Api = axios.create({
    baseURL: 'http://localhost:3001',
    headers,
  });

  const internalServerErrorStatus = 500;

  try {
    const res = await Api[method](resource, body);
    result.success = res.status === successCode;
    result.code = res.status;
    result.description = res.statusText;
    result.header = res?.headers;
    result.data = res?.data;
    return result;
  } catch (err) {
    result.success = false;
    result.code = err?.response?.status || internalServerErrorStatus;
    result.header = null;
    result.data = {
      code: err?.response?.status || internalServerErrorStatus,
      message: err?.message,
      name: err?.name,
    };
    return result;
  }
}

export default request;
