##Разработка\*\*

#Настройка репозитория под проект:

1. В файле `webpack.config.js` задайте переменные:

   - APP_NAME - имя проекта
   - BASE_URL - корень запросов
   - DEV_PROXY - адрес сервера где лежит backend

2. В `services/AuthService.ts` проверьте правильность путей backend в методах `login`,`logout`,`fetchProfile`

#Запуск проекта Локально

`npm i`
`npm run dev`
