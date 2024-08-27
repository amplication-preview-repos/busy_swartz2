import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AptitudeTestServiceBase } from "./base/aptitudeTest.service.base";

@Injectable()
export class AptitudeTestService extends AptitudeTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
