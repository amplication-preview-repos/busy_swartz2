import { CounselorWhereInput } from "./CounselorWhereInput";
import { CounselorOrderByInput } from "./CounselorOrderByInput";

export type CounselorFindManyArgs = {
  where?: CounselorWhereInput;
  orderBy?: Array<CounselorOrderByInput>;
  skip?: number;
  take?: number;
};
