// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Context } from "../types";
import { Post } from "./prisma-client";
import { User } from "./prisma-client";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type NodeResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => boolean | null | Promise<boolean | null>;

  export type FeedResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post[] | Promise<Post[]>;

  export interface Type {
    node: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => boolean | null | Promise<boolean | null>;

    feed: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post[] | Promise<Post[]>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsPing {
    id: string;
  }

  export type PingResolver = (
    parent: {},
    args: ArgsPing,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    ping: (
      parent: {},
      args: ArgsPing,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {};

  export type AuthorResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    author: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    name: (parent: User) => parent.name
  };

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Mutation: MutationResolvers.Type;
  Post: PostResolvers.Type;
  User: UserResolvers.Type;
}
