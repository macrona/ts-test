import * as http from 'http';

// GET请求处理函数
export async function handleGet(
  url: string,
  params?: object,
  headers?: object
) {
  const query = Object.entries(params || {}).map(([k, v]) => `${k}=${v}`).join('&');
  const options = {
    method: 'GET',
    headers,
  };
  const reqUrl = `${url}?${query}`;
  try {
    const response = await request(reqUrl, options);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

// POST请求处理函数
export async function handlePost(
  url: string,
  data?: any,
  headers?: object
) {
  const postData = JSON.stringify(data);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  try {
    const response = await request(url, options, postData);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

// 封装request请求函数，返回Promise
function request(url: string, options: http.RequestOptions, postData?: string) {
  return new Promise<http.IncomingMessage>((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        const parsedData = JSON.parse(rawData);
        resolve(parsedData);
      });
    });
    req.on('error', (e) => {
      reject(e.message);
    });
    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

// 请求结果处理函数
function handleResponse(response: any) {
  // 检查返回的状态码和数据是否符合要求（这里只是做了简单处理，实际业务中需自行修改）
  if (response.statusCode === 200 && response) {
    return response;
  } else {
    throw new Error("Invalid response");
  }
}

//请求错误处理函数
function handleError(error: any) {
  // 打印错误信息（实际业务中可自行修改）
  console.error(error);
  // 返回自定义的错误信息
  return { error: error.message };
}
