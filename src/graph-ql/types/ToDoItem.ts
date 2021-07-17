import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The Categories model" })
export class ToDoItem {
    @Field(()=> ID)
    id: string;

    @Field()
    name: String;

    @Field()
    description: String;
}
