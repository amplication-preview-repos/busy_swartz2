import { CareerPathWhereInput } from "./CareerPathWhereInput";
import { CareerPathOrderByInput } from "./CareerPathOrderByInput";

export type CareerPathFindManyArgs = {
  where?: CareerPathWhereInput;
  orderBy?: Array<CareerPathOrderByInput>;
  skip?: number;
  take?: number;
};
