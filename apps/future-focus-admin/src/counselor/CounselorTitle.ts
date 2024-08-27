import { Counselor as TCounselor } from "../api/counselor/Counselor";

export const COUNSELOR_TITLE_FIELD = "firstName";

export const CounselorTitle = (record: TCounselor): string => {
  return record.firstName?.toString() || String(record.id);
};
