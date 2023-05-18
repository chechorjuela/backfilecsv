### Instalación Nodejs

Una vez que tenga instaladas las dos carpetas, podrá ingresar a la carpeta <b>backfilecsv</b> y actualizar la rama e
instalar los módulos necesarios.

> git pull
>
> npm install

Cuando se hayan instalado todos los módulos necesarios, podrá ejecutar el siguiente comando para ejecutar el proyecto.

> npm start

Podrá ingresar a http//:localhost:5050 en el navegador y se abrirá la documentación del swagger-> http://localhost:5050/api-docs/

Mientras el proyecto se está ejecutando, podrá visualizar los tipos de solicitudes (requests) que se le están haciendo
al servidor.

* Para correr las pruebas unitatrias se tenria que correr en el termonal con el siguiente comando

> npm test

## Modulos Instalados

* axios: ^1.4.0
* body-parser: ^1.20.2
* chai-http: ^4.3.0
* cookie-parser: ^1.4.6
* cors: ^2.8.5
* csvtojson: ^2.0.10
* dotenv: ^16.0.3
* express: ^4.18.2
* http-errors: ^2.0.0
* morgan: ^1.10.0
* sinon: ^15.0.4
* swagger-jsdoc: ^6.2.8
* swagger-ui-express: ^4.6.3