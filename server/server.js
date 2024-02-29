import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files?

app.post('/addToList', (req, res) => {
  return res.status(200).json('task added')
})

// catchall and error handling
app.use('/', (req, res) => {
  return res.status(404).send('Resource not found')
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'A server-side error occurred' },
 };
 const errorObj = Object.assign({}, defaultErr, err);
 console.log(errorObj.log);
 return res.status(errorObj.status).json(errorObj.message) 
});

app.listen(PORT, console.log(`Server listening at Port ${PORT}`));