import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CounselorService } from "./counselor.service";
import { CounselorControllerBase } from "./base/counselor.controller.base";

@swagger.ApiTags("counselors")
@common.Controller("counselors")
export class CounselorController extends CounselorControllerBase {
  constructor(
    protected readonly service: CounselorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
