import * as express from 'express';
import MessageService from '../services/MessageService';

const router = express.Router();

router.get('/', async (req, res) => {
    const staticMessage : string = await MessageService.getMessage();
    const dbMessages : any = await MessageService.getAllMessages();

    res.json({ staticMessage: staticMessage, dbMessages: dbMessages });

});

export default router;
