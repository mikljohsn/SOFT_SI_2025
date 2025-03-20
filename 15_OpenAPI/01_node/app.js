import express from 'express'

const app = express();

app.use(express.json()); //allows us to pass the request bodies as json


import usersRouter from './routers/usersRouter.js' //import our router from our project
app.use(usersRouter)


import swaggerJSDoc from 'swagger-jsdoc';
const swaggerDefinition = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Users API',
            version: '0.0.1'
        }
    },
    apis: ['./routers/*Router.js']
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ['./routers/*Router.js'] 
};

import swaggerUi from 'swagger-ui-express'
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));





const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});