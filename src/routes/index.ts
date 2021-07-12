import * as express from 'express';
import MessageService from '../services/MessageService';

const router = express.Router();

router.get('/', (req, res) => {
    const message : string = MessageService.getMessage();

    res.json({ message: message });

});

export default router;
