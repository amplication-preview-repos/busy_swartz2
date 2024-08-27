/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Counselor } from "./Counselor";
import { CounselorCountArgs } from "./CounselorCountArgs";
import { CounselorFindManyArgs } from "./CounselorFindManyArgs";
import { CounselorFindUniqueArgs } from "./CounselorFindUniqueArgs";
import { CreateCounselorArgs } from "./CreateCounselorArgs";
import { UpdateCounselorArgs } from "./UpdateCounselorArgs";
import { DeleteCounselorArgs } from "./DeleteCounselorArgs";
import { ChatSessionFindManyArgs } from "../../chatSession/base/ChatSessionFindManyArgs";
import { ChatSession } from "../../chatSession/base/ChatSession";
import { CounselorService } from "../counselor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Counselor)
export class CounselorResolverBase {
  constructor(
    protected readonly service: CounselorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Counselor",
    action: "read",
    possession: "any",
  })
  async _counselorsMeta(
    @graphql.Args() args: CounselorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Counselor])
  @nestAccessControl.UseRoles({
    resource: "Counselor",
    action: "read",
    possession: "any",
  })
  async counselors(
    @graphql.Args() args: CounselorFindManyArgs
  ): Promise<Counselor[]> {
    return this.service.counselors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Counselor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Counselor",
    action: "read",
    possession: "own",
  })
  async counselor(
    @graphql.Args() args: CounselorFindUniqueArgs
  ): Promise<Counselor | null> {
    const result = await this.service.counselor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Counselor)
  @nestAccessControl.UseRoles({
    resource: "Counselor",
    action: "create",
    possession: "any",
  })
  async createCounselor(
    @graphql.Args() args: CreateCounselorArgs
  ): Promise<Counselor> {
    return await this.service.createCounselor({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Counselor)
  @nestAccessControl.UseRoles({
    resource: "Counselor",
    action: "update",
    possession: "any",
  })
  async updateCounselor(
    @graphql.Args() args: UpdateCounselorArgs
  ): Promise<Counselor | null> {
    try {
      return await this.service.updateCounselor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Counselor)
  @nestAccessControl.UseRoles({
    resource: "Counselor",
    action: "delete",
    possession: "any",
  })
  async deleteCounselor(
    @graphql.Args() args: DeleteCounselorArgs
  ): Promise<Counselor | null> {
    try {
      return await this.service.deleteCounselor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ChatSession], { name: "chatSessions" })
  @nestAccessControl.UseRoles({
    resource: "ChatSession",
    action: "read",
    possession: "any",
  })
  async findChatSessions(
    @graphql.Parent() parent: Counselor,
    @graphql.Args() args: ChatSessionFindManyArgs
  ): Promise<ChatSession[]> {
    const results = await this.service.findChatSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
