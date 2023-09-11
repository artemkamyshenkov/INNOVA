## INNOVASYSTEM

###  Setup and Running

### Install dependencies:
`$ npm install`

### Running the app
`$ npm run start:dev`

#### Redux, redux-toolkit, организация и типизация redux-кода (создание store, типизация, организация кода, асинхронные actions, RTK Query, кэширование через RTK Query, reselect- опционально).
+ [Redux store] (https://github.com/artemkamyshenkov/INNOVA/tree/dev/src/app/providers/storeProvider)
+ [RTK Query] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/shared/api/mediaService.ts)
+ [RTK Query] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/shared/api/friendsServise.ts)
+ [Async actions] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/entities/User/model/actions/actions.ts)
+ [Reselect] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/entities/UI/model/selectors/uiSelectors.ts)

#### Современный CSS (flex, grid, animation), SCSS (mixin, variables, вложенность), PostCSS. Плагины для PostCSS: autoprefixer. (In project)

#### Работа с формами в react, валидация и отображение ошибок, показ warning, валидация по отправке формы, вводу или фокусу, управление состоянием формы, синхронизация состояния с показом UI блоков (добавить форму в проект).
+ React hook form. Register form: features/RegisterForm. Login form: features/LoginForm

#### Axios (запросы, abort request), WebSockets (нативный и библиотека socket.io).
+ [websocket] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/features/Messages/ui/MessageInput.tsx)
+ [websocket] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/features/Messages/ui/MessagesList.tsx)
+ [websocket-server] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/server/index.js)

#### Работа с localStorage (запись, получение). Другие браузерные API (clipboard API, intersection observer API, native file API).
+ [local storage] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/entities/User/model/slice/userSlice.ts)
+ [clipboard API] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/shared/helpers/clipboardApi.ts). Use in Profile page, media page, recommended page.
+ [intersection observer API] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/shared/hooks/useInfiniteScroll.ts). Infinite scroll on the [media page] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/screens/MediaPage/ui/MediaPage.tsx)
+ [native file API] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/screens/ProfilePage/ui/ProfilePage.tsx)

#### Углубление в работу со сборкой проекта: webpack, SWC/babel (добавить плагины).
+ [webpack] (https://github.com/artemkamyshenkov/INNOVA/tree/dev/config/build)

#### TypeScript: generics, utility types, config. Условная типизация - опционально.

#### Работа с интерфейсом и анализ дизайна. Общая насмотренность в плане интерфейсов, видение дизайна и аккуратности его исполнения (верстки), когда речь идет о несформированном дизайне (макете), который надо самому реализовать, сверстать, продумать, как он работает, или же полностью выработать самостоятельное UI решение без дизайна вообще. Улучшение UX проекта (создание подсказок, обеспечение плавности интерфейса, обеспечение удобства использования и аккуратности оформления интерфейса).
`$ npm run start:dev`

#### Оптимизация в react (виртуальный список, оптимизация “тяжелых” компонентов), lighthouse (опционально - сформировать отчет, без красных метрик), оптимизация bundle (terser/uglify-js - опционально). Подходы типа throttle и debounce (добавить в проект либо throttle, либо debounce).
+ [virtual list, optimization a large array] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/screens/RecommendUsers/ui/RecommendUsers.tsx)
+ [throttle] (https://github.com/artemkamyshenkov/INNOVA/blob/dev/src/shared/hooks/useThrottle.ts)
