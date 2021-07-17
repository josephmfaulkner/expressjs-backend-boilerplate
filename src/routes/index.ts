import * as express from 'express';
import MessageService from '../services/MessageService';

const router = express.Router();

router.get('/', async (req, res) => {
    const dbMessages : any = await MessageService.getAllMessages();

    res.json({ messages: dbMessages });

});

export default router;
