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
    "lesson1": `

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

Добавьте тег **_<link>_** в **_<head>_** для нашего CSS и
тег **_<script>_** для нашего пакета JavaScript перед
закрывающим **</body>**.

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
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous">
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

Загрузите готовый к использованию скомпилированный код для
**Bootstrap v5.3.2**, чтобы легко вставить его в свой
проект, который включает:

- Скомпилированные и минимизированные пакеты CSS (см. Сравнение файлов CSS)
- Скомпилированные и минимизированные плагины JavaScript (См. сравнение JS-файлов)

Сюда не входят документация, исходные файлы или
любые дополнительные зависимости JavaScript, такие как Popper.

[Скачать](#)

1. Откройте страницу в выбранном вами браузере, чтобы увидеть
    страницу с начальной загрузкой. Теперь вы можете начать
    сборку с помощью **Bootstrap 5**, создав свой собственный макет,
    добавив десятки компонентов и используя наши официальные примеры.
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

`, "lesson2": `

# Сетка

## Контрольные точки (Breakpoints) в Bootstrap

это пользовательские ширины, которые определяют, как ваш отзывчивый
макет ведет себя на разных размерах экрана или области просмотра.
Они являются основой отзывчивого дизайна и используются для контроля
того, когда ваш макет может быть адаптирован под определенный размер
области просмотра или устройства.

Bootstrap включает в себя шесть стандартных контрольных точек для
создания отзывчивых макетов:

- X-Small (менее 576px
- Small (576px и больше
- Medium (768px и больше
- Large (992px и больше
- Extra large (1200px и больше
- Extra extra large (1400px и больше)


Эти контрольные точки можно настроить, если вы используете исходные файлы Sass.

Вот пример кода, который демонстрирует, как использовать эти контрольные точки в медиа-запросах:



\`\`\`css
// X-Small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
\`\`\`


Если вы пишете свой CSS с помощью Sass, все ваши медиа-запросы
доступны через миксины Sass:

\`\`\`css
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
\`\`\`

## Контейнеры

Контейнеры в Bootstrap являются основным элементом макета.
Они служат для содержания, заполнения и (иногда) центрирования
содержимого внутри них. Хотя контейнеры могут быть вложенными,
для большинства макетов вложенный контейнер не требуется.

Есть три типа контейнеров в Bootstrap:

1. **_.container_** - Этот класс устанавливает max-width для каждой контрольной точки.
2. **_.container-{breakpoint}_** - Этот класс равен width: 100% до указанной контрольной точки.
3. **_.container-fluid_** - Этот класс равен width: 100% во всех контрольных точках.

В таблице ниже показано, как max-width каждого контейнера
сравнивается с исходными **_.container_** и **_.container-fluid_**
для каждой контрольной точки:

## Контейнер по умолчанию

Наш класс .container по умолчанию является адаптивным
контейнером фиксированной ширины, что означает, что
его максимальная ширина изменяется в каждой контрольной точке.

**_<div class="container"> <!-- Контент здесь --> </div>_**

## Адаптивные контейнеры

Адаптивные контейнеры позволяют Вам указать класс шириной 100% до достижения
указанной контрольной точки, после чего мы применяем max-width для каждой из более
высоких контрольных точек. 

Например, **_.container-sm_** имеет 100% ширину для начала до тех пор, пока не будет
достигнута контрольная точка sm, где он будет масштабироваться с помощью **md**, **lg**,
**xl** и **xxl**.

\`\`\`html
<div class="container-sm">100% шириной до контрольной точки small</div>
<div class="container-md">100% шириной до контрольной точки medium</div>
<div class="container-lg">100% шириной до контрольной точки large</div>
<div class="container-xl">100% шириной до контрольной точки extra large</div>
<div class="container-xxl">100% шириной до контрольной точки extra extra large</div>
\`\`\`

## Подвижные контейнеры

Используйте .container-fluid для контейнера полной ширины, охватывающего всю ширину
области просмотра.

<div class="container-fluid"> ... </div>




Sass переменные
Как показано выше, Bootstrap генерирует серию предопределенных контейнерных классов,
чтобы помочь Вам создать желаемые макеты. Вы можете настроить эти предопределенные
классы контейнеров, изменив карту Sass (находится в _variables.scss), которая их
поддерживает: scss/_variables.scss.

<$container-max-widths: ( sm: 540px, md: 720px, lg: 960px, xl: 1140px, xxl: 1320px);




Для получения дополнительной информации и примеров того, как изменять наши карты и
переменные Sass, обратитесь к разделу Sass документации по Сетке.



Sass миксины
Помимо настройки Sass, вы также можете создавать свои собственные контейнеры
с помощью нашего миксина Sass.




        // Исходный mixin 

        @mixin make-container($padding-x: $container-padding-x)

        { width: 100%; padding-right: $padding-x; 

        padding-left: $padding-x; margin-right: auto; margin-left: auto; } 

        // Применение .custom-container { @include make-container(); }




Система сетки Bootstrap
Основана на использовании контейнеров, строк и колонок для расположения и выравнивания
контента. на построена на flexbox и полностью отзывчива
              О                                                        .






Пример создания трех колонок одинаковой ширины на всех устройствах и в окнах просмотра
с использованием предопределенных классов сетки:


Сетка поддерживает шесть адаптивных контрольных точек, 

основанных на медиа-запросах          , что позволяет управлять размером и поведением
                                      min-width

контейнера и колонки с помощью каждой контрольной точки                      .






Контейнеры центрируют и размещают Ваш контент по горизонтали. 

Ряды (rows) являются оболочками для колонок. Каждая колонка имеет горизонтальный
padding для управления пространством между ними. Колонки гибкие. 



В каждой строке доступно 12 шаблонов колонок, что позволяет создавать различные
комбинации элементов, охватывающих любое количество колонок.



Промежутки также являются адаптивными и настраиваемыми. 

Доступны классы промежутков во всех контрольных точках с теми же размерами, что и наши
поля и отступы. Если Вы не хотите использовать предопределенные классы сетки в Bootstrap,
Вы можете использовать наш источник Sass сетки чтобы создать свой собственный с
большим количеством семантическая разметка.


`, "lesson3": `


`, "lesson4": `


`
};



const content = document.querySelector('main'),
    lesson1 = document.querySelector('#lesson-1'),
    lesson2 = document.querySelector('#lesson-2'),
    lesson3 = document.querySelector('#lesson-3'),
    lesson4 = document.querySelector('#lesson-4');

render('lesson1');

lesson1.addEventListener('click', (e) => { render('lesson1'); });
lesson2.addEventListener('click', (e) => { render('lesson2'); });
lesson3.addEventListener('click', (e) => { render('lesson3'); });
lesson4.addEventListener('click', (e) => { render('lesson4'); });

function render(name) {
    content.innerHTML = '';
    const commits = lessons[name];
    content.innerHTML = md.render(commits);
    Rainbow.color(() => console.log('Новые блоки с кодом теперь подсвечены!'));
}