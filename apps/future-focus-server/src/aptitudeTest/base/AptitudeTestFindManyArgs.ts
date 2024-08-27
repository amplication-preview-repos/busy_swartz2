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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AptitudeTestOrderByInput } from "./AptitudeTestOrderByInput";

@ArgsType()
class AptitudeTestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AptitudeTestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AptitudeTestWhereInput, { nullable: true })
  @Type(() => AptitudeTestWhereInput)
  where?: AptitudeTestWhereInput;

  @ApiProperty({
    required: false,
    type: [AptitudeTestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AptitudeTestOrderByInput], { nullable: true })
  @Type(() => AptitudeTestOrderByInput)
  orderBy?: Array<AptitudeTestOrderByInput>;

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

export { AptitudeTestFindManyArgs as AptitudeTestFindManyArgs };
