import { SortOrder } from "../../util/SortOrder";

export type CareerPathOrderByInput = {
  careerDescription?: SortOrder;
  careerName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  stepsToAchieve?: SortOrder;
  updatedAt?: SortOrder;
};
