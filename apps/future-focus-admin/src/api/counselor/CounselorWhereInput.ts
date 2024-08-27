import { ChatSessionListRelationFilter } from "../chatSession/ChatSessionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CounselorWhereInput = {
  chatSessions?: ChatSessionListRelationFilter;
  expertise?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
