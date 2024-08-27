import { JsonValue } from "type-fest";

export type CareerPath = {
  careerDescription: string | null;
  careerName: string | null;
  createdAt: Date;
  id: string;
  stepsToAchieve: JsonValue;
  updatedAt: Date;
};
