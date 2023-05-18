const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const FileService = require('../src/infrastructure/services/file.service');
const CvsServiceConvert = require('../src/helpers/CvsServiceConvert');
const FileController = require('../src/application/controllers/file.controller');

const mockResponse = {
  files: [
    'test1.csv',
    'test2.csv',
    'test3.csv',
    'test18.csv',
    'test4.csv',
    'test5.csv',
    'test6.csv',
    'test9.csv',
    'test15.csv'
  ]
};

describe('FileController', () => {
  let fileController;

  before(() => {
    // Create instances of FileService and CvsServiceConvert for testing
    const fileService = new FileService();
    const cvsServiceConvert = new CvsServiceConvert();

    // Create an instance of FileController
    fileController = new FileController(fileService, cvsServiceConvert);
  });

  it('should retrieve a list of files', async () => {
    // Create mock request and response objects
    const req = {query: {}};
    const res = {
      send: (data) => {
        // Add your assertions here
        expect(data).to.have.property('status', 200);
        expect(data).to.have.property('data');
        // Add more assertions as needed
      },
    };

    // Call the listFiles method with the mock objects
    await fileController.listFiles(req, res);
  });
  it('should retrieve a file', async () => {
    // Create mock request and response objects
    const req = {params: {name: 'test15.csv'}};
    const res = {
      json: (data) => {
        // Add your assertions here
        expect(data).to.have.property('status', 200);
        expect(data).to.have.property('data');
        // Add more assertions as needed
      },
      status: (code) => {
        // Verify that the status code is correctly set
        expect(code).to.equal(200);
        return res; // Return the response object for chaining
      },
    };

    // Call the getFile method with the mock objects
    await fileController.getFile(req, res);
  });

  it('should handle an error', async () => {
    const req = {params: {name: 'nonexistent.csv'}};
    const res = {
      json: (data) => {
        expect(data).to.have.property('message', 500);
      },
      status: (code) => {
        expect(code).to.equal(500);
        return res;
      },
    };
    await fileController.getFile(req, res);
  });

  it('should return a response with status 200 and the file list', async () => {
    // Mock the request and response objects
    const req = {};
    const res = {
      send: sinon.spy()
    };

    // Call the list function
    await fileController.list(req, res);

    // Check the response
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.args[0][0]).to.deep.equal({
      status: 200,
      data: mockResponse
    });
  });
});