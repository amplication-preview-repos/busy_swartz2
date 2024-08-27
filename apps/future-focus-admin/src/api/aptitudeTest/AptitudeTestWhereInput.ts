import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AptitudeTestWhereInput = {
  id?: StringFilter;
  testDescription?: StringNullableFilter;
  testName?: StringNullableFilter;
  testQuestions?: JsonFilter;
};
