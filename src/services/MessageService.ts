import { Message } from '../../sequelize/db/models';

class MessageService {

    static async getAllMessages() : Promise<any> {
        return await Message.findAll();
    }

    static async getMessage() : Promise<string> {
        return "Hello from Typescript and Heroku!";
    }
}

export default MessageService;