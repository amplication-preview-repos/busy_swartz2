import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AptitudeTestService } from "./aptitudeTest.service";
import { AptitudeTestControllerBase } from "./base/aptitudeTest.controller.base";

@swagger.ApiTags("aptitudeTests")
@common.Controller("aptitudeTests")
export class AptitudeTestController extends AptitudeTestControllerBase {
  constructor(
    protected readonly service: AptitudeTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
