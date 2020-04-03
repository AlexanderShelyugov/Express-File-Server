import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from 'body-parser';

import {
  filesController
} from './controller';

const app = express();

app.use(fileUpload({
  createParentPath: true,
  debug: true,
  useTempFiles: true,
  tempFileDir: '/tmp',
  limits: {
    fileSize: 2 * 1024 * 1024
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome To Testing API" });
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const add = (num1, num2) => {
    return num1 + num2;
  };
  res.json({
    status: "success",
    message: "Welcome To Testing API",
    result: add(num1, num2)
  });
});

app.use('/', filesController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
