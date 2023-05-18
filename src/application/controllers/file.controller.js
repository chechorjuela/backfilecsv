const FileService = require('../../infrastructure/services/file.service');
const CvsServiceConvert = require('../../helpers/CvsServiceConvert');

const fileService = new FileService();

const cvsServiceConvert = new CvsServiceConvert();

class FileController {

  async list(req, res) {

    let files = {
      status: 200
    };
    const response = await fileService.getAllFiles();
    files.data = response;
    res.send(files);
  }

  async listFiles(req, res) {

    let files = {
      status: 200
    };
    let data = []
    if(req.query.filename){
      try{
        const filesResponseData = await fileService.getFileByName(req.query.filename);
        const dataGet = await cvsServiceConvert.processFileData(filesResponseData);
        data = dataGet;
      }catch (e) {
      }

    }else {
      const response = await fileService.getAllFiles();
      await Promise.all(response.files.map(async (file) => {
        try {
          const filesResponseData = await fileService.getFileByName(file);
          const dataGet = await cvsServiceConvert.processFileData(filesResponseData);
          if(dataGet.length > 0){
            data.push(dataGet[0])
          }
        } catch (e) {
        }
      }));
    }
    files.data = data;
    res.send(files);
  }

  async getFile(req, res) {
    let files = {
      status: 200,
      message: ''
    };
    try {
      const data = await fileService.getFileByName(req.params.name);
      files.data = data;
      res.json(files);
    } catch (error) {
      files = {
        message: 500
      };
      res.status(500).json(files);
    }
  }
}

module.exports = FileController;