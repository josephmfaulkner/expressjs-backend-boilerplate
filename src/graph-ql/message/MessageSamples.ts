import { Message } from "./MessageType";

function createMessage(messageData: Partial<Message>) {
    return Object.assign(new Message(), messageData);
}

function createMessageSamples() {
    
    const newDate = new Date(); 

    return [
        createMessage({
            id: 0, 
            message: 'Message #1',
            createdAt: newDate,
            updatedAt: newDate
        }),
        createMessage({
            id: 1, 
            message: 'Message #2',
            createdAt: newDate,
            updatedAt: newDate
        }),
        createMessage({
            id: 2, 
            message: 'Message #3',
            createdAt: newDate,
            updatedAt: newDate
        }),
        createMessage({
            id: 3, 
            message: 'Message #4',
            createdAt: newDate,
            updatedAt: newDate
        }),
        createMessage({
            id: 4, 
            message: 'Message #5',
            createdAt: newDate,
            updatedAt: newDate
        }),
    ];
}

export default createMessageSamples; 