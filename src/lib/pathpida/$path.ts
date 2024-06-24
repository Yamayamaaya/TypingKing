export const pagesPath = {
  "lp": {
    $url: (url?: { hash?: string }) => ({ pathname: '/lp' as const, hash: url?.hash })
  },
  "menu": {
    _id: (id: string | number) => ({
      "edit": {
        $url: (url?: { hash?: string }) => ({ pathname: '/menu/[id]/edit' as const, query: { id }, hash: url?.hash })
      }
    }),
    "new": {
      $url: (url?: { hash?: string }) => ({ pathname: '/menu/new' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/menu' as const, hash: url?.hash })
  },
  "mypage": {
    "profile": {
      $url: (url?: { hash?: string }) => ({ pathname: '/mypage/profile' as const, hash: url?.hash })
    }
  },
  "open": {
    "order": {
      $url: (url?: { hash?: string }) => ({ pathname: '/open/order' as const, hash: url?.hash })
    },
    "serve": {
      $url: (url?: { hash?: string }) => ({ pathname: '/open/serve' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/open' as const, hash: url?.hash })
  },
  "record": {
    $url: (url?: { hash?: string }) => ({ pathname: '/record' as const, hash: url?.hash })
  },
  "signin": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signin' as const, hash: url?.hash })
  },
  "support": {
    "contact": {
      $url: (url?: { hash?: string }) => ({ pathname: '/support/contact' as const, hash: url?.hash })
    }
  },
  "waitCard": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/waitCard/[id]' as const, query: { id }, hash: url?.hash })
    }),
    "check": {
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/waitCard/check/[id]' as const, query: { id }, hash: url?.hash })
      })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
