import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatSessionModuleBase } from "./base/chatSession.module.base";
import { ChatSessionService } from "./chatSession.service";
import { ChatSessionController } from "./chatSession.controller";
import { ChatSessionResolver } from "./chatSession.resolver";

@Module({
  imports: [ChatSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatSessionController],
  providers: [ChatSessionService, ChatSessionResolver],
  exports: [ChatSessionService],
})
export class ChatSessionModule {}
