const AxiosService = require("../../helpers/axios.services");
const {urlFileAll, urlFileByName} = require("../../config/apiUrl");
require('dotenv').config();
const headers = {
  'Authorization': `Bearer ${process.env.SECRET_APP}`,
  'Content-Type': 'application/json',
};
const apiUrl = process.env.API_URL || '';
const apiService = new AxiosService(`${apiUrl}`, headers);

class FileService {
  async getAllFiles() {

    const response = await apiService.get(urlFileAll);
    return response;
  }
  async getFileByName(name) {
    const response = await apiService.get(urlFileByName.replace(':name', name)).then( d => {
      return d;
    });
    return response;
  }
}
module.exports = FileService;