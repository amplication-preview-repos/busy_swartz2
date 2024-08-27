import { JsonValue } from "type-fest";

export type AptitudeTest = {
  createdAt: Date;
  id: string;
  testDescription: string | null;
  testName: string | null;
  testQuestions: JsonValue;
  updatedAt: Date;
};
