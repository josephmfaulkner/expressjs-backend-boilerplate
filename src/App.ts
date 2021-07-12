import * as express from 'express';
import mainRouter from './routes';

class App {
  public express;
  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express.use('/', mainRouter);
  }

}
export default new App().express;
