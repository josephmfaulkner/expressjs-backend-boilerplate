import { Field, ObjectType, Int } from "type-graphql";

@ObjectType({ description: "Message" })
export class Message {
  @Field()
  id: number;

  @Field({ nullable: true, description: "Message contents" })
  message?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

}