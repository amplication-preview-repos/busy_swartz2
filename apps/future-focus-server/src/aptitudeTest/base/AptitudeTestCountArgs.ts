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
import { AptitudeTestWhereInput } from "./AptitudeTestWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AptitudeTestCountArgs {
  @ApiProperty({
    required: false,
    type: () => AptitudeTestWhereInput,
  })
  @Field(() => AptitudeTestWhereInput, { nullable: true })
  @Type(() => AptitudeTestWhereInput)
  where?: AptitudeTestWhereInput;
}

export { AptitudeTestCountArgs as AptitudeTestCountArgs };
