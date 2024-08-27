/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AptitudeTestWhereInput } from "./AptitudeTestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AptitudeTestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AptitudeTestWhereInput,
  })
  @ValidateNested()
  @Type(() => AptitudeTestWhereInput)
  @IsOptional()
  @Field(() => AptitudeTestWhereInput, {
    nullable: true,
  })
  every?: AptitudeTestWhereInput;

  @ApiProperty({
    required: false,
    type: () => AptitudeTestWhereInput,
  })
  @ValidateNested()
  @Type(() => AptitudeTestWhereInput)
  @IsOptional()
  @Field(() => AptitudeTestWhereInput, {
    nullable: true,
  })
  some?: AptitudeTestWhereInput;

  @ApiProperty({
    required: false,
    type: () => AptitudeTestWhereInput,
  })
  @ValidateNested()
  @Type(() => AptitudeTestWhereInput)
  @IsOptional()
  @Field(() => AptitudeTestWhereInput, {
    nullable: true,
  })
  none?: AptitudeTestWhereInput;
}
export { AptitudeTestListRelationFilter as AptitudeTestListRelationFilter };
