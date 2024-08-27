import { InputJsonValue } from "../../types";

export type CareerPathCreateInput = {
  careerDescription?: string | null;
  careerName?: string | null;
  stepsToAchieve?: InputJsonValue;
};
