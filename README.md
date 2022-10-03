This is test application for CodeUnion.

# Running

Check settings at `/.env` first, then run:

```shell
yarn
yarn dev
```

Then navigate to http://localhost:3000/.

# What's been implemented

Just made a project setup with basic features. Because of some problems specified below, I didn't
finished it, but you can absolutely judge how I fit your position by completed features.

Not finished tasks just repeat the rest of functionality I was able to complete:

- NextJS application with
  [layouts](https://github.com/muerwre/codeunion-hire-me/tree/main/src/layouts/MainLayout),
  [modular stylesheets](https://github.com/muerwre/codeunion-hire-me/blob/main/pages/search/styles.module.scss),
  [CSS variables](https://github.com/muerwre/codeunion-hire-me/tree/main/styles),
  but without SSR at this stage. NextJS, in my opinion, is the best option for that type of
  projects, that will require SEO-optimizations in future.
- [Global MobX storage](https://github.com/muerwre/codeunion-hire-me/tree/main/src/lib/store) to
  store JWT tokens with LocalStorage persistence. That may be done with just React Context and
  LocalStorage, but that's how I use MobX in projects.
- [AuthProvider](https://github.com/muerwre/codeunion-hire-me/tree/main/src/lib/jwt), that
  implements basic authorization functionality;
- [Multilingual support with i18n stub](https://github.com/muerwre/codeunion-hire-me/tree/main/src/lib/i18n),
  that can be replaced with i18next or i18n.js lib later. Because implementing i18n even after a
  month of active project work is painful;
- [Axios API](https://github.com/muerwre/codeunion-hire-me/tree/main/src/api/rest), that uses JWT
  authorization and token refresh;
- [Modal provider](https://github.com/muerwre/codeunion-hire-me/tree/main/src/common/modal/ModalProvider),
  that shows modals. Made it with react-modal for speed, but it's typed and working;
- [Simple UI kit](https://github.com/muerwre/codeunion-hire-me/tree/main/src/common/ui), made from
  scratch to showcase my markup and styling abilities;
- Actual [search results page](https://github.com/muerwre/codeunion-hire-me/blob/main/src/modules/search/containers/SearchResults/index.tsx)
  with css auto-fill grid and pagination on scroll; [paginated result loading](https://github.com/muerwre/codeunion-hire-me/blob/main/src/modules/search/hooks/useSearchQuery.ts) with [SWR-managed cache](https://swr.vercel.app/ru).

# What's not implemented and why

- API doesn't handle **CORS** requests properly. You should response to **OPTIONS** request for
  each url with [proper headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Because of
  that I wasn't able to perform event authorization request;
- Search results can't be requested without authorization, so, again,
  [Designs](https://www.figma.com/file/w6T7PHZEcQNN32M5Z9qWUY/Test-Task) doesn't have state for that
- There's no mobile markup in said
  [Designs](https://www.figma.com/file/w6T7PHZEcQNN32M5Z9qWUY/Test-Task), so I did my best;
- Not using [barells](https://lightrun.com/answers/vercel-next-js-tree-shaking-doesnt-work-with-typescript-barrel-files),
  since it breaks nextjs build optimizations
