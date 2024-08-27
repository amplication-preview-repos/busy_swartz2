import { ChatSessionCreateNestedManyWithoutCounselorsInput } from "./ChatSessionCreateNestedManyWithoutCounselorsInput";

export type CounselorCreateInput = {
  chatSessions?: ChatSessionCreateNestedManyWithoutCounselorsInput;
  expertise?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
