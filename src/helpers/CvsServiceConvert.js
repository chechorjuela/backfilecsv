const csvtojson = require('csvtojson');

class CvsServiceConvert {
  async processFileData(dataFile) {
    const lines = await csvtojson().fromString(dataFile);
    const groupByFile = lines.reduce((result, obj) => {
      const { file, text = '', number = '', hex = '' } = obj;
      if (!result[file]) {
        result[file] = { file, lines: [] };
      }
      result[file].lines.push({ text, number, hex });
      return result;
    }, {});
    const data = Object.values(groupByFile);
    return data;
  }
}

module.exports = CvsServiceConvert;