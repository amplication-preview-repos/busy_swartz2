import { ChatSessionUpdateManyWithoutCounselorsInput } from "./ChatSessionUpdateManyWithoutCounselorsInput";

export type CounselorUpdateInput = {
  chatSessions?: ChatSessionUpdateManyWithoutCounselorsInput;
  expertise?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
