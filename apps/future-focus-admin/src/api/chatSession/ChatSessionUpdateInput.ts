import { InputJsonValue } from "../../types";
import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionUpdateInput = {
  chatContent?: InputJsonValue;
  counselor?: CounselorWhereUniqueInput | null;
  sessionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
