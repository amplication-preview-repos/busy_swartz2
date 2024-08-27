import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CounselorModuleBase } from "./base/counselor.module.base";
import { CounselorService } from "./counselor.service";
import { CounselorController } from "./counselor.controller";
import { CounselorResolver } from "./counselor.resolver";

@Module({
  imports: [CounselorModuleBase, forwardRef(() => AuthModule)],
  controllers: [CounselorController],
  providers: [CounselorService, CounselorResolver],
  exports: [CounselorService],
})
export class CounselorModule {}
