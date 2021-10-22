import express, {Request, Response, NextFunction} from "express";

const app = express();

app.get('./status', (req: express.Request, res: express.Response, next) => {
  res.status(200).send({foo: 'bar'});
})

app.listen(3000,() => {
  console.log('Aplicação em execução')
})