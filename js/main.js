// const content_area = document.querySelector('#content-area');
// const buttons_file = document.querySelectorAll('.btn-file');
// const sun = document.querySelector('#sun');


// buttons_file.forEach(button_file => {
//   button_file.addEventListener('click', (event) => {
//     const lesson = event.target.getAttribute('data-file');
//     start(lesson);
//   });
// });

// async function start(lesson) {

//   const response = await fetch(`https://blezz-tech.github.io/test-php-site/learn/${lesson}`);
//   const commits = await response.text();
//   content_area.innerHTML = md.render(commits);

//   Rainbow.color(() => console.log('Новые блоки с кодом теперь подсвечены!'));
// }

// sun.addEventListener('click', (event) => {
//   const body = document.querySelector('body');
//   if (body.getAttribute('data-bs-theme') == 'light') {
//     body.setAttribute('data-bs-theme', 'dark');
//   } else {
//     body.setAttribute('data-bs-theme', 'light');
//   }
// });

const lessons = {
    "Подключение": `

# Подключение

Bootstrap предлагает несколько способов подключения к проекту, рассмотрим возможные варианты:

_Для начала работы с Bootstrap, вы можете использовать подключение с помощью ссылки (CDN)._

## 1. Создайте новый HTML-файл index.html в корне вашего проекта.

Включите тег **_<meta name = "viewport">_** для корректной работы на мобильных устройствах.

Ваш базовый код должен выглядеть так:

\`\`\`html
<!doctype html>
<html lang="ru">
    <head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1">
    <title>Демо Bootstrap</title>
    </head>
    <body>
    <h1>Привет мир!</h1>
    </body>
</html>
\`\`\`

## 2. Подключите CSS и JS Bootstrap.

Добавьте тег **<link>** в **<head>** для нашего CSS и тег **<script>** для нашего пакета JavaScript перед закрывающим **</body>**.

Пример:

\`\`\`html
<!doctype html>
<html lang="ru">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous">
    </script>
</body>
</html>
\`\`\`

Скомпилированные CSS и JS

Загрузите готовый к использованию скомпилированный код для **Bootstrap v5.3.2**, чтобы легко вставить его в свой проект, который включает:

- Скомпилированные и минимизированные пакеты CSS (см. Сравнение файлов CSS)
- Скомпилированные и минимизированные плагины JavaScript (См. сравнение JS-файлов)

Сюда не входят документация, исходные файлы или любые дополнительные зависимости JavaScript, такие как Popper.

[Скачать](#)

1. Откройте страницу в выбранном вами браузере, чтобы увидеть страницу с начальной загрузкой.
    Теперь вы можете начать сборку с помощью **Bootstrap 5**, создав свой собственный макет, добавив
    Десятки компонентов и используя наши официальные примеры.
2. В качестве справки, вот наши основные ссылки CDN:

- CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css
- JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js

Исходные файлы

Скомпилируйте **Bootstrap 5** с Вашим собственным конвейером ресурсов,
загрузив наши исходные файлы **SASS**, **JavaScript** и документации.
Этот вариант требует дополнительных инструментов:

- **Компилятор SASS** для компиляции исходных файлов **Sass** в файлы CSS
- **Аутопрефиксер** для префикса поставщика CSS

Если вам потребуется наш полный набор инструментов сборки, они включены для разработки Bootstrap и его документации, но, скорее всего, они не подходят для ваши собственные цели.

[Скачать исходный код](#)

`, "Сетка": `

`, "Настройка": `


`, "Компоненты": `


`
};





const content = document.querySelector('main');

const commits = lessons['Подключение'];
content.innerHTML = md.render(commits);