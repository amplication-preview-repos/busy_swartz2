import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CareerPathWhereInput = {
  careerDescription?: StringNullableFilter;
  careerName?: StringNullableFilter;
  id?: StringFilter;
  stepsToAchieve?: JsonFilter;
};
