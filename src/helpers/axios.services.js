const axios = require('axios');

class AxiosService {
  constructor(baseUrl, headers) {
    this.instance = axios.create({
      baseURL: baseUrl,
      headers: headers,
    });
  }

  async get(url) {
    const response = await this.instance.get(url);
    return response.data;
  }

  async post(url, payload) {
    const response = await this.instance.post(url, payload);
    return response.data;
  }

  async put(url, payload) {
    const response = await this.instance.put(url, payload);
    return response.data;
  }

  async delete(url) {
    const response = await this.instance.delete(url);
    return response.data;
  }
}

module.exports = AxiosService;