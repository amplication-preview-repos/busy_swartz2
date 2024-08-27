import { JsonValue } from "type-fest";
import { Counselor } from "../counselor/Counselor";
import { User } from "../user/User";

export type ChatSession = {
  chatContent: JsonValue;
  counselor?: Counselor | null;
  createdAt: Date;
  id: string;
  sessionId: string | null;
  updatedAt: Date;
  user?: User | null;
};
