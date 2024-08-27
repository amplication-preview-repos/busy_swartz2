import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AptitudeTestResolverBase } from "./base/aptitudeTest.resolver.base";
import { AptitudeTest } from "./base/AptitudeTest";
import { AptitudeTestService } from "./aptitudeTest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AptitudeTest)
export class AptitudeTestResolver extends AptitudeTestResolverBase {
  constructor(
    protected readonly service: AptitudeTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
