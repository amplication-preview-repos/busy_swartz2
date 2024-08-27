import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CareerPathServiceBase } from "./base/careerPath.service.base";

@Injectable()
export class CareerPathService extends CareerPathServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
