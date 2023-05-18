const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0', // Specify the OpenAPI version here
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'My API documentation',
  },
  servers: [
    {
      url: 'http://localhost:5050',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/application/**/*.js'],
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};