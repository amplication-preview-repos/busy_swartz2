import { CareerPath as TCareerPath } from "../api/careerPath/CareerPath";

export const CAREERPATH_TITLE_FIELD = "careerName";

export const CareerPathTitle = (record: TCareerPath): string => {
  return record.careerName?.toString() || String(record.id);
};
