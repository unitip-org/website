/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeLayoutImport } from './routes/_home-layout'
import { Route as HomeLayoutIndexImport } from './routes/_home-layout/index'
import { Route as HomeLayoutOffersImport } from './routes/_home-layout/offers'
import { Route as HomeLayoutJobsImport } from './routes/_home-layout/jobs'
import { Route as HomeLayoutChatsImport } from './routes/_home-layout/chats'
import { Route as HomeLayoutAccountImport } from './routes/_home-layout/account'
import { Route as OffersCreateIndexImport } from './routes/offers/create/index'
import { Route as JobsCreateIndexImport } from './routes/jobs/create/index'
import { Route as ChatsConversationIndexImport } from './routes/chats/conversation/index'
import { Route as AuthRegisterIndexImport } from './routes/auth/register/index'

// Create Virtual Routes

const AuthLoginIndexLazyImport = createFileRoute('/auth/login/')()

// Create/Update Routes

const HomeLayoutRoute = HomeLayoutImport.update({
  id: '/_home-layout',
  getParentRoute: () => rootRoute,
} as any)

const HomeLayoutIndexRoute = HomeLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => HomeLayoutRoute,
} as any)

const HomeLayoutOffersRoute = HomeLayoutOffersImport.update({
  id: '/offers',
  path: '/offers',
  getParentRoute: () => HomeLayoutRoute,
} as any)

const HomeLayoutJobsRoute = HomeLayoutJobsImport.update({
  id: '/jobs',
  path: '/jobs',
  getParentRoute: () => HomeLayoutRoute,
} as any)

const HomeLayoutChatsRoute = HomeLayoutChatsImport.update({
  id: '/chats',
  path: '/chats',
  getParentRoute: () => HomeLayoutRoute,
} as any)

const HomeLayoutAccountRoute = HomeLayoutAccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => HomeLayoutRoute,
} as any)

const AuthLoginIndexLazyRoute = AuthLoginIndexLazyImport.update({
  id: '/auth/login/',
  path: '/auth/login/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/auth/login/index.lazy').then((d) => d.Route),
)

const OffersCreateIndexRoute = OffersCreateIndexImport.update({
  id: '/offers/create/',
  path: '/offers/create/',
  getParentRoute: () => rootRoute,
} as any)

const JobsCreateIndexRoute = JobsCreateIndexImport.update({
  id: '/jobs/create/',
  path: '/jobs/create/',
  getParentRoute: () => rootRoute,
} as any)

const ChatsConversationIndexRoute = ChatsConversationIndexImport.update({
  id: '/chats/conversation/',
  path: '/chats/conversation/',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterIndexRoute = AuthRegisterIndexImport.update({
  id: '/auth/register/',
  path: '/auth/register/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_home-layout': {
      id: '/_home-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof HomeLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_home-layout/account': {
      id: '/_home-layout/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof HomeLayoutAccountImport
      parentRoute: typeof HomeLayoutImport
    }
    '/_home-layout/chats': {
      id: '/_home-layout/chats'
      path: '/chats'
      fullPath: '/chats'
      preLoaderRoute: typeof HomeLayoutChatsImport
      parentRoute: typeof HomeLayoutImport
    }
    '/_home-layout/jobs': {
      id: '/_home-layout/jobs'
      path: '/jobs'
      fullPath: '/jobs'
      preLoaderRoute: typeof HomeLayoutJobsImport
      parentRoute: typeof HomeLayoutImport
    }
    '/_home-layout/offers': {
      id: '/_home-layout/offers'
      path: '/offers'
      fullPath: '/offers'
      preLoaderRoute: typeof HomeLayoutOffersImport
      parentRoute: typeof HomeLayoutImport
    }
    '/_home-layout/': {
      id: '/_home-layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof HomeLayoutIndexImport
      parentRoute: typeof HomeLayoutImport
    }
    '/auth/register/': {
      id: '/auth/register/'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterIndexImport
      parentRoute: typeof rootRoute
    }
    '/chats/conversation/': {
      id: '/chats/conversation/'
      path: '/chats/conversation'
      fullPath: '/chats/conversation'
      preLoaderRoute: typeof ChatsConversationIndexImport
      parentRoute: typeof rootRoute
    }
    '/jobs/create/': {
      id: '/jobs/create/'
      path: '/jobs/create'
      fullPath: '/jobs/create'
      preLoaderRoute: typeof JobsCreateIndexImport
      parentRoute: typeof rootRoute
    }
    '/offers/create/': {
      id: '/offers/create/'
      path: '/offers/create'
      fullPath: '/offers/create'
      preLoaderRoute: typeof OffersCreateIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/login/': {
      id: '/auth/login/'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface HomeLayoutRouteChildren {
  HomeLayoutAccountRoute: typeof HomeLayoutAccountRoute
  HomeLayoutChatsRoute: typeof HomeLayoutChatsRoute
  HomeLayoutJobsRoute: typeof HomeLayoutJobsRoute
  HomeLayoutOffersRoute: typeof HomeLayoutOffersRoute
  HomeLayoutIndexRoute: typeof HomeLayoutIndexRoute
}

const HomeLayoutRouteChildren: HomeLayoutRouteChildren = {
  HomeLayoutAccountRoute: HomeLayoutAccountRoute,
  HomeLayoutChatsRoute: HomeLayoutChatsRoute,
  HomeLayoutJobsRoute: HomeLayoutJobsRoute,
  HomeLayoutOffersRoute: HomeLayoutOffersRoute,
  HomeLayoutIndexRoute: HomeLayoutIndexRoute,
}

const HomeLayoutRouteWithChildren = HomeLayoutRoute._addFileChildren(
  HomeLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof HomeLayoutRouteWithChildren
  '/account': typeof HomeLayoutAccountRoute
  '/chats': typeof HomeLayoutChatsRoute
  '/jobs': typeof HomeLayoutJobsRoute
  '/offers': typeof HomeLayoutOffersRoute
  '/': typeof HomeLayoutIndexRoute
  '/auth/register': typeof AuthRegisterIndexRoute
  '/chats/conversation': typeof ChatsConversationIndexRoute
  '/jobs/create': typeof JobsCreateIndexRoute
  '/offers/create': typeof OffersCreateIndexRoute
  '/auth/login': typeof AuthLoginIndexLazyRoute
}

export interface FileRoutesByTo {
  '/account': typeof HomeLayoutAccountRoute
  '/chats': typeof HomeLayoutChatsRoute
  '/jobs': typeof HomeLayoutJobsRoute
  '/offers': typeof HomeLayoutOffersRoute
  '/': typeof HomeLayoutIndexRoute
  '/auth/register': typeof AuthRegisterIndexRoute
  '/chats/conversation': typeof ChatsConversationIndexRoute
  '/jobs/create': typeof JobsCreateIndexRoute
  '/offers/create': typeof OffersCreateIndexRoute
  '/auth/login': typeof AuthLoginIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_home-layout': typeof HomeLayoutRouteWithChildren
  '/_home-layout/account': typeof HomeLayoutAccountRoute
  '/_home-layout/chats': typeof HomeLayoutChatsRoute
  '/_home-layout/jobs': typeof HomeLayoutJobsRoute
  '/_home-layout/offers': typeof HomeLayoutOffersRoute
  '/_home-layout/': typeof HomeLayoutIndexRoute
  '/auth/register/': typeof AuthRegisterIndexRoute
  '/chats/conversation/': typeof ChatsConversationIndexRoute
  '/jobs/create/': typeof JobsCreateIndexRoute
  '/offers/create/': typeof OffersCreateIndexRoute
  '/auth/login/': typeof AuthLoginIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/account'
    | '/chats'
    | '/jobs'
    | '/offers'
    | '/'
    | '/auth/register'
    | '/chats/conversation'
    | '/jobs/create'
    | '/offers/create'
    | '/auth/login'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/account'
    | '/chats'
    | '/jobs'
    | '/offers'
    | '/'
    | '/auth/register'
    | '/chats/conversation'
    | '/jobs/create'
    | '/offers/create'
    | '/auth/login'
  id:
    | '__root__'
    | '/_home-layout'
    | '/_home-layout/account'
    | '/_home-layout/chats'
    | '/_home-layout/jobs'
    | '/_home-layout/offers'
    | '/_home-layout/'
    | '/auth/register/'
    | '/chats/conversation/'
    | '/jobs/create/'
    | '/offers/create/'
    | '/auth/login/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  HomeLayoutRoute: typeof HomeLayoutRouteWithChildren
  AuthRegisterIndexRoute: typeof AuthRegisterIndexRoute
  ChatsConversationIndexRoute: typeof ChatsConversationIndexRoute
  JobsCreateIndexRoute: typeof JobsCreateIndexRoute
  OffersCreateIndexRoute: typeof OffersCreateIndexRoute
  AuthLoginIndexLazyRoute: typeof AuthLoginIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  HomeLayoutRoute: HomeLayoutRouteWithChildren,
  AuthRegisterIndexRoute: AuthRegisterIndexRoute,
  ChatsConversationIndexRoute: ChatsConversationIndexRoute,
  JobsCreateIndexRoute: JobsCreateIndexRoute,
  OffersCreateIndexRoute: OffersCreateIndexRoute,
  AuthLoginIndexLazyRoute: AuthLoginIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_home-layout",
        "/auth/register/",
        "/chats/conversation/",
        "/jobs/create/",
        "/offers/create/",
        "/auth/login/"
      ]
    },
    "/_home-layout": {
      "filePath": "_home-layout.tsx",
      "children": [
        "/_home-layout/account",
        "/_home-layout/chats",
        "/_home-layout/jobs",
        "/_home-layout/offers",
        "/_home-layout/"
      ]
    },
    "/_home-layout/account": {
      "filePath": "_home-layout/account.tsx",
      "parent": "/_home-layout"
    },
    "/_home-layout/chats": {
      "filePath": "_home-layout/chats.tsx",
      "parent": "/_home-layout"
    },
    "/_home-layout/jobs": {
      "filePath": "_home-layout/jobs.tsx",
      "parent": "/_home-layout"
    },
    "/_home-layout/offers": {
      "filePath": "_home-layout/offers.tsx",
      "parent": "/_home-layout"
    },
    "/_home-layout/": {
      "filePath": "_home-layout/index.tsx",
      "parent": "/_home-layout"
    },
    "/auth/register/": {
      "filePath": "auth/register/index.tsx"
    },
    "/chats/conversation/": {
      "filePath": "chats/conversation/index.tsx"
    },
    "/jobs/create/": {
      "filePath": "jobs/create/index.tsx"
    },
    "/offers/create/": {
      "filePath": "offers/create/index.tsx"
    },
    "/auth/login/": {
      "filePath": "auth/login/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
