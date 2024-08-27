import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CareerPathModuleBase } from "./base/careerPath.module.base";
import { CareerPathService } from "./careerPath.service";
import { CareerPathController } from "./careerPath.controller";
import { CareerPathResolver } from "./careerPath.resolver";

@Module({
  imports: [CareerPathModuleBase, forwardRef(() => AuthModule)],
  controllers: [CareerPathController],
  providers: [CareerPathService, CareerPathResolver],
  exports: [CareerPathService],
})
export class CareerPathModule {}
