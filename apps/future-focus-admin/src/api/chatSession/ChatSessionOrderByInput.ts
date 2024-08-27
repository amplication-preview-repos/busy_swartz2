import { SortOrder } from "../../util/SortOrder";

export type ChatSessionOrderByInput = {
  chatContent?: SortOrder;
  counselorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
