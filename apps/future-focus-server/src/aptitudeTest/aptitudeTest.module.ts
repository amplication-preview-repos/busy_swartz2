import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AptitudeTestModuleBase } from "./base/aptitudeTest.module.base";
import { AptitudeTestService } from "./aptitudeTest.service";
import { AptitudeTestController } from "./aptitudeTest.controller";
import { AptitudeTestResolver } from "./aptitudeTest.resolver";

@Module({
  imports: [AptitudeTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [AptitudeTestController],
  providers: [AptitudeTestService, AptitudeTestResolver],
  exports: [AptitudeTestService],
})
export class AptitudeTestModule {}
