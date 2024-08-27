import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChatSessionResolverBase } from "./base/chatSession.resolver.base";
import { ChatSession } from "./base/ChatSession";
import { ChatSessionService } from "./chatSession.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChatSession)
export class ChatSessionResolver extends ChatSessionResolverBase {
  constructor(
    protected readonly service: ChatSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
