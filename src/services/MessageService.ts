import { Message as MessageSequelize } from '../../sequelize/db/models';

class MessageService {

    static async getAllMessages() : Promise<MessageSequelize> {
        return await MessageSequelize.findAll();
    }

    static async getMessage(id: number) : Promise<MessageSequelize> {
        return await MessageSequelize.findByPk(id);
    }
}

export default MessageService;