import shortId from 'shortid'
import { Request, response, Response } from 'express';
import { config } from '../config/Constants'

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    //Verificar se a url não existe
    //Criar o hash
    const {originURL} = req.body;
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`;
    //Salvar URL no Banco
    //Retornar URL
    response.json({originURL, hash, shortURL});
  }

  public async redirect(req: Request, res: Response): Promise<void>{
    // Hash URL
    const {hash} = req.params
    // Encontrar URL original 
    // Redirecionar URL original
  }
  
}