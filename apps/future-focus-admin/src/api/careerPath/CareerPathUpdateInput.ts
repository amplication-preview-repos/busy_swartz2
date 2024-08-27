import { InputJsonValue } from "../../types";

export type CareerPathUpdateInput = {
  careerDescription?: string | null;
  careerName?: string | null;
  stepsToAchieve?: InputJsonValue;
};
