import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// GET请求处理函数
export async function handleGet(
  url: string,
  params?: object,
  headers?: object
) {
  try {
    const response = await axios.get(url, { params, headers });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

// POSt请求处理函数
export async function handlePost(
  url: string,
  data?: any,
  headers?: object
) {
  try {
    const response = await axios.post(url, data, { headers });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

// 请求结果处理函数
function handleResponse(response: AxiosResponse) {
  // 检查返回的状态码和数据是否符合要求（这里只是做了简单处理，实际业务中需自行修改）
  if (response.status === 200 && response.data) {
    return response.data;
  } else {
    throw new Error("Invalid response");
  }
}

// 请求错误处理函数
function handleError(error: any) {
  // 打印错误信息（实际业务中可自行修改）
  console.error(error);

  // 根据不同的错误类型做出不同的处理
  if (error.response) {
    // 请求已发送，服务器返回状态码在2xx之外
    console.error(error.response.data);
    console.error(error.response.status);
  } else if (error.request) {
    // 请求已发送，但没有收到响应
    console.error(error.request);
  } else {
    // 其他错误
    console.error("Error", error.message);
  }

  // 返回自定义的错误信息
  return { error: error.message };
}
