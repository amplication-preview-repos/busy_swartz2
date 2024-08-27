/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChatSessionWhereInput } from "./ChatSessionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChatSessionOrderByInput } from "./ChatSessionOrderByInput";

@ArgsType()
class ChatSessionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChatSessionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChatSessionWhereInput, { nullable: true })
  @Type(() => ChatSessionWhereInput)
  where?: ChatSessionWhereInput;

  @ApiProperty({
    required: false,
    type: [ChatSessionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChatSessionOrderByInput], { nullable: true })
  @Type(() => ChatSessionOrderByInput)
  orderBy?: Array<ChatSessionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ChatSessionFindManyArgs as ChatSessionFindManyArgs };
