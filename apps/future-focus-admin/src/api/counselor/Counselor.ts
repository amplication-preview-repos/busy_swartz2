import { ChatSession } from "../chatSession/ChatSession";

export type Counselor = {
  chatSessions?: Array<ChatSession>;
  createdAt: Date;
  expertise: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
