import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatSessionService } from "./chatSession.service";
import { ChatSessionControllerBase } from "./base/chatSession.controller.base";

@swagger.ApiTags("chatSessions")
@common.Controller("chatSessions")
export class ChatSessionController extends ChatSessionControllerBase {
  constructor(
    protected readonly service: ChatSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
