class Http {
  get(url, headers) {
    return makeRequest('GET', url, headers)
  }

  post(url, data, headers) {
    return makeRequest('POST', url, headers, data)
  }
}

export const http = new Http()

function makeRequest(method, url, headers = {}, data = {}) {
  return fetch(url, {method, headers}).then(response => response.json())
}