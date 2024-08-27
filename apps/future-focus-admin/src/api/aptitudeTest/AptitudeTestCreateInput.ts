import { InputJsonValue } from "../../types";

export type AptitudeTestCreateInput = {
  testDescription?: string | null;
  testName?: string | null;
  testQuestions?: InputJsonValue;
};
