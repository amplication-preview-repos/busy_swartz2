import { AptitudeTest as TAptitudeTest } from "../api/aptitudeTest/AptitudeTest";

export const APTITUDETEST_TITLE_FIELD = "testName";

export const AptitudeTestTitle = (record: TAptitudeTest): string => {
  return record.testName?.toString() || String(record.id);
};
