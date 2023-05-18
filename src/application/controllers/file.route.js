// src/routes/userRoutes.js
const express = require('express');
const FileController = require('./file.controller');

const fileController = new FileController();

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: File
 *   description: API endpoints for managing files of endpoint external
 */

/**
 * @swagger
 * /api/file/data:
 *   get:
 *     summary: Get all file with propietires
 *     tags: [File]
 *     parameters:
 *         - name: filename
 *           in: query
 *           description: Optional query parameter for get a file specific
 *           schema:
 *             type: string
 *           required: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: integer
 *                     example: 200
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         file:
 *                           type: string
 *                         lines:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               text:
 *                                 type: string
 *                               number:
 *                                 type: string
 *                               hex:
 *                                 type: string
 */
router.get('/data', fileController.listFiles);

/**
 * @swagger
 * /api/file/getFileByName/{name}:
 *   get:
 *     summary: Get all file with propietires
 *     tags: [File]
 *     parameters:
 *         - name: name
 *           in: path
 *           description: Optional query parameter for get a file specific
 *           schema:
 *             type: string
 *           required: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: integer
 *                     example: 200
 *                   data:
 *                     type: string
 *                     example: "file,text,number,hex\ntest2.csv,bgWRH\ntest2.csv,rHdWwBZAsSYfgYyoSByO,077707,20c56ab62e9e4ffc0772bcffbb950911"
 *
 */
router.get('/getFileByName/:name', fileController.getFile);

/**
 * @swagger
 * /api/file/list:
 *   get:
 *     summary: Get all file list
 *     tags: [File]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: integer
 *                     example: 200
 *                   data:
 *                     type: object
 *                     properties:
 *                      files:
 *                        type: array
 *                        items:
 *                          type: string
 *
 *
 */
router.get('/list', fileController.list);

module.exports = router;