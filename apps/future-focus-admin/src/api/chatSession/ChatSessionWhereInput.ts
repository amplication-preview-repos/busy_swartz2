import { JsonFilter } from "../../util/JsonFilter";
import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionWhereInput = {
  chatContent?: JsonFilter;
  counselor?: CounselorWhereUniqueInput;
  id?: StringFilter;
  sessionId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
