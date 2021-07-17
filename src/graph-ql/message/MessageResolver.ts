import {
    Resolver,
    Query,
    FieldResolver,
    Arg,
    Root,
    Mutation,
    Int,
    ResolverInterface,
  } from "type-graphql";
  
  
import { Message } from "./MessageType";
import MessageService from "../../services/MessageService";
import createMessageSamples from "./MessageSamples";

  
@Resolver(of => Message)
export class MessageResolver {
    private readonly items: Message[] = createMessageSamples();

    @Query(returns => Message, { nullable: true })
    async message(@Arg("id") id: number): Promise<Message | undefined> {
        //return await this.items.find(recipe => recipe.id === id);
        return await MessageService.getMessage(id);
    }

    @Query(returns => [Message], { description: "Get all messages" })
    async messages(): Promise<Message[]> {
        //return await this.items;
        return await MessageService.getAllMessages(); 
    }

}