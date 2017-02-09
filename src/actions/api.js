export const jsonContentTypes = [
  'application/json',
  'application/vnd.api+json'
];

export const apiRequest = (url, options = {}) => {
  return fetch(url, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        if (res.status === 200) {
          return res;
        } else if (jsonContentTypes.some(contentType => res.headers.get('Content-Type').indexOf(contentType) > -1)) {
          return res.json();
        }
      }

      const e = new Error(res.statusText);
      e.response = res;
      throw e;
    });
};

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};
