import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CareerPathResolverBase } from "./base/careerPath.resolver.base";
import { CareerPath } from "./base/CareerPath";
import { CareerPathService } from "./careerPath.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CareerPath)
export class CareerPathResolver extends CareerPathResolverBase {
  constructor(
    protected readonly service: CareerPathService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
