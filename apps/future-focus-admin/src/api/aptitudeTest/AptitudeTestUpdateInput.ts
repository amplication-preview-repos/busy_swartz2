import { InputJsonValue } from "../../types";

export type AptitudeTestUpdateInput = {
  testDescription?: string | null;
  testName?: string | null;
  testQuestions?: InputJsonValue;
};
