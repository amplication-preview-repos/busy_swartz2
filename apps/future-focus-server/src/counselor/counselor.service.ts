import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CounselorServiceBase } from "./base/counselor.service.base";

@Injectable()
export class CounselorService extends CounselorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
