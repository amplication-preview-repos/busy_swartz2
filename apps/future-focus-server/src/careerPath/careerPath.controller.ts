import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CareerPathService } from "./careerPath.service";
import { CareerPathControllerBase } from "./base/careerPath.controller.base";

@swagger.ApiTags("careerPaths")
@common.Controller("careerPaths")
export class CareerPathController extends CareerPathControllerBase {
  constructor(
    protected readonly service: CareerPathService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
