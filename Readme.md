**Разработка**

_Настройка репозитория под проект_

1. В файле `webpack.config.js` задайте переменные:

   - APP_NAME - имя проекта
   - BASE_URL - корень запросов
   - DEV_PROXY - адрес сервера где лежит backend

2. В `services/AuthService.ts` проверьте правильность путей backend в методах `login`,`logout`,`fetchProfile`

_Запуск проекта Локально_

`npm i` - установка зависимостей
`npm run dev` - запуск локального сервера
