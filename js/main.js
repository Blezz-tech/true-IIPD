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

# _._ Подключение

Bootstrap предлагает несколько способов подключения к проекту, рассмотрим возможные варианты:

_Для начала работы с Bootstrap, можно использовать подключение с помощью ссылки (CDN)._

## 1. Создайте новый HTML-файл index.html в корне проекта.

Включите тег **_<meta name = "viewport">_** для корректной работы на мобильных устройствах.

Базовый код должен выглядеть так:

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
**Bootstrap v5.3.2**, чтобы легко вставить его в
проект, который включает:

- Скомпилированные и минимизированные пакеты CSS (см. Сравнение файлов CSS)
- Скомпилированные и минимизированные плагины JavaScript (См. сравнение JS-файлов)

Сюда не входят документация, исходные файлы или
любые дополнительные зависимости JavaScript, такие как Popper.

[Скачать](#)

1. Откройте страницу в выбранном браузере, чтобы увидеть
    страницу с начальной загрузкой. Теперь можно начать
    сборку с помощью **Bootstrap 5**, создав макет,
    добавив десятки компонентов и используя официальные примеры.
2. В качестве справки, вот основные ссылки CDN:

- CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css
- JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js

Исходные файлы

Скомпилируйте **Bootstrap 5** с собственным конвейером ресурсов,
загрузив исходные файлы **SASS**, **JavaScript** и документации.

Этот вариант требует дополнительных инструментов:

- **Компилятор SASS** для компиляции исходных файлов **Sass** в файлы CSS
- **Аутопрефиксер** для префикса поставщика CSS

Если потребуется полный набор инструментов сборки, они
включены для разработки Bootstrap и его документации.

[Скачать исходный код](#)

`, "lesson2": `

# _._ Сетка

## Контрольные точки (Breakpoints) в Bootstrap

это пользовательские ширины, которые определяют, как отзывчивый
макет ведет себя на разных размерах экрана или области просмотра.
Они являются основой отзывчивого дизайна и используются для контроля
того, когда макет может быть адаптирован под определенный размер
области просмотра или устройства.

Bootstrap включает в себя шесть стандартных контрольных точек для
создания отзывчивых макетов:

- X-Small (менее 576px
- Small (576px и больше
- Medium (768px и больше
- Large (992px и больше
- Extra large (1200px и больше
- Extra extra large (1400px и больше)

Контрольные точки можно настроить, если используются исходные файлы Sass.

Пример кода, который демонстрирует, как использовать контрольные точки в медиа-запросах:

\`\`\`scss
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

При написании CSS с помощью Sass,
все медиа-запросы доступны через миксины Sass:

\`\`\`scss
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
\`\`\`

## Контейнеры

Контейнеры в Bootstrap являются основным элементом макета.
Они служат для содержания, заполнения и (иногда) центрирования.
Контейнеры могут быть вложенными, но для большинства макетов
вложенный контейнер не требуется.

Типы контейнеров в Bootstrap:

1. **_.container_** - Этот класс устанавливает max-width для каждой контрольной точки.
2. **_.container-{breakpoint}_** - Этот класс равен width: 100% до указанной контрольной точки.
3. **_.container-fluid_** - Этот класс равен width: 100% во всех контрольных точках.

В таблице ниже показано, как max-width каждого контейнера
сравнивается с исходными **_.container_** и **_.container-fluid_**
для каждой контрольной точки:

![](./img/lesson/2/img001.png)

![](./img/lesson/2/img002.png)

## Контейнер по умолчанию

Класс .container по умолчанию является адаптивным
контейнером фиксированной ширины, что означает, что
его максимальная ширина изменяется в каждой контрольной точке.

**_<div class="container"> <!-- Контент здесь --> </div>_**

## Адаптивные контейнеры

Адаптивные контейнеры позволяют указать класс шириной 100% до достижения
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

Используйте **_.container-fluid_** для контейнера полной ширины,
охватывающего всю ширину области просмотра.

**_<div class="container-fluid"> ... </div>_**

## Sass переменные

Как показано выше, Bootstrap генерирует серию предопределенных контейнерных классов,
чтобы помочь создать желаемые макеты. Вы можете настроить эти предопределенные
классы контейнеров, изменив карту Sass (находится в _variables.scss), которая их
поддерживает: **scss/_variables.scss**.

**_<$container-max-widths: ( sm: 540px, md: 720px, lg: 960px, xl: 1140px, xxl: 1320px);_**

Для получения дополнительной информации и примеров того, как изменять карты и
переменные Sass, обратитесь к

[разделу Sass документации по Сетке]()

## Sass миксины

Помимо настройки Sass, вы также можете создавать свои собственные контейнеры
с помощью нашего миксина Sass.

\`\`\`scss
// Исходный mixin 
@mixin make-container($padding-x: $container-padding-x)
{
    width: 100%;
    padding-right: $padding-x; 
    padding-left: $padding-x;
    margin-right: auto;
    margin-left: auto;
} 
// Применение
.custom-container {
    @include make-container();
}
\`\`\`

## Система сетки Bootstrap

Основана на использовании контейнеров, строк и колонок для расположения
и выравнивания контента. Она построена на flexbox и полностью отзывчива.

Пример создания трех колонок одинаковой ширины на всех устройствах и в
окнах просмотра с использованием предопределенных классов сетки:

Сетка поддерживает шесть адаптивных контрольных точек, 

Сетка поддерживает шесть адаптивных контрольных точек, 
основанных на медиа-запросах min-width, что позволяет управлять размером и
поведением контейнера и колонки с помощью каждой контрольной точки.

Контейнеры центрируют и размещают Ваш контент по горизонтали. 
Ряды (rows) являются оболочками для колонок. Каждая колонка имеет горизонтальный
padding для управления пространством между ними. Колонки гибкие. 

В каждой строке доступно 12 шаблонов колонок, что позволяет создавать
различные комбинации элементов, охватывающих любое количество колонок.

Промежутки также являются адаптивными и настраиваемыми. 

Доступны классы промежутков во всех контрольных точках с теми же
размерами, что поля и отступы. Если не использовать предопределенные
классы сетки в Bootstrap, можно воспользоваться источником Sass сетки
чтобы создать собственную разметку.

`, "lesson3": `

# _.._  Цвета

Изменить цвет текста можно с помощью цветных утилит (классов).
При необходимости изменения цвета ссылки, используйте
вспомогательные классы .link-*, которые имеют состояния :hover и :focus.

Пример цветовых утилит .text-* , сгенерированных из исходной карты Sass $theme-colors: 

![](./img/lesson/3/img001.jpg)

![](./img/lesson/3/img002.jpg)

## Интервал

Bootstrap включает в себя широкий набор сокращенных вспомогательных классов полей,
отступов и разрывов для изменения внешнего вида элементов.

## Поля и отступы 

Присваивайте удобные для восприятия значения margin или padding элементу или
подмножеству его сторон с помощью сокращенных классов.

Включает поддержку отдельных свойств, всех свойств, а также свойств по вертикали
и горизонтали. Классы строятся из карты Sass по умолчанию в диапазоне от .25rem до 3rem.

## Примечание

Утилиты интервалов, которые применяются ко всем контрольным точкам, от xs до xxl, не имеют в них аббревиатуры контрольные точки.  Это связано с тем, что эти классы применяются начиная с min-width: 0 и выше и поэтому не связаны медиа-запросом.  Остальные контрольные точки, однако, содержат аббревиатуру контрольные точки. 

Классы именуются в формате {property}{sides}-{size} для xs и {property}{sides}-{breakpoint}-{size} для sm, md, lg, xl и xxl.
Где свойство - одно из:

- m - для классов, которые устанавливают margin
- p - для классов, которые устанавливают padding

Где стороны - одна из:

- t - для классов, которые устанавливают margin-top или padding-top
- b - для классов, которые устанавливают margin-bottom или padding-bottom
- s - (start) для классов, которые устанавливают margin-left или padding-left в LTR, margin-right или padding-right в RTL
- e - (end) для классов, которые устанавливают margin-right или padding-right в LTR, margin-left или padding-left в RTL
- x - для классов, которые устанавливают оба *-left и *-right
- y - для классов, которые устанавливают оба *-top и *-bottom
- blank - для классов, которые устанавливают a margin или padding со всех 4 сторон элемента

Где размер - один из:

- 0 - или классы, устраняющие margin или padding установив его на 0
- 1 - (по умолчанию) для классов, которые устанавливают the margin или padding равным $spacer * .25
- 2 - (по умолчанию) для классов, которые устанавливают the margin или padding равным $spacer * .5
- 3 - (по умолчанию) для классов, которые устанавливают the margin или padding равным $spacer
- 4 - (по умолчанию) для классов, которые устанавливают the margin или padding равным $spacer * 1.5
- 5 - (по умолчанию) для классов, которые устанавливают the margin или padding равным $spacer * 3
- auto - для классов, которые устанавливают margin равным авто 

(Есть возиожность использовать другие размеры, добавив записи в переменную Sass map $spacers.)


Несколько примеров этих классов:

![](./img/lesson/3/img003.jpg)

Горизонтальное центрирование 

Bootstrap также включает класс .mx-auto для горизонтального центрирования содержимого
уровня блока фиксированной ширины, то есть содержимого, имеющего набор display: block
и width, путем установки горизонтальных полей на auto.

![](./img/lesson/3/img004.jpg)

## Навигационная панель

Навигационная панель, также известная как "навбар" (Navbar), в Bootstrap - это компонент,
предназначенный для создания стилизованной панели навигации на странице. Навбар обычно
располагается в верхней части страницы и содержит ссылки или кнопки для навигации по
сайту или приложению.

Навбар в Bootstrap предлагает множество функций и настроек, позволяющих легко создавать
адаптивные и интерактивные панели навигации. Обычно содержит логотип, различные элементы
меню, выпадающие списки, формы поиска, кнопки и многое другое.

Пример всех подкомпонентов, включенных в адаптивную навигационную панель,
которая автоматически сворачивается в контрольной точке lg (большая).

\`\`\`html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Прокрутка навбара</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ссылка</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ссылка
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Действие</a></li>
            <li><a class="dropdown-item" href="#">Другое действие</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ссылка</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
        <button class="btn btn-outline-success" type="submit">Поиск</button>
      </form>
    </div>
  </div>
</nav>
\`\`\`

![](./img/lesson/3/img005.jpg)

![](./img/lesson/3/img006.jpg)

## Карточки

О карточках

Карточка - это гибкий и расширяемый контейнер содержимого.
Включает опции заголовков и футеров, широкий спектр контента,
цвета бэкграунда и опции отображения. Карточки заменяют старые
панели, углубления и эскизы. Функциональность, аналогичная этим
компонентам, доступна в виде классов-модификаторов для карточек.

## Пример

Карточки созданы с применением как можно более меньшего количества
кода и стилей, но они все же имеют множество инструментов для настройки
и контроля.  Легко выравниваются и сочетаются с другими компонентами
Bootstrap, т.к. они созданы с помощью flex-box. По умолчанию не имеют
margin, поэтому при необходимости используйте интервал.

Карточки не имеют фиксированной ширины по умолчанию, так что
будут автоматически заполнять полную ширину родительского элемента.
Это настраивается с помощью параметров размера. Пример базовой карточки
фиксированной ширины со смешанным содержимым:

\`\`\`html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Заголовок карточки</h5>
    <p class="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.</p>
    <a href="#" class="btn btn-primary">Перейти куда-нибудь</a>
  </div>
</div>
\`\`\`

![](./img/lesson/3/img007.jpg)

## Кнопки

Bootstrap имеет базовый класс .btn, который устанавливает основные стили,
такие как отступы и выравнивание содержимого. По умолчанию элементы управления
.btn имеют прозрачную рамку, цвет фона и не имеют каких-либо явных стилей
фокуса и наведения.

\`\`\`html
<button type="button" class="btn">Базовый класс</button>
\`\`\`

### Варианты кнопок

Bootstrap включает в себя несколько вариантов кнопок,
каждый из которых используется для разных целей.

\`\`\`html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary<button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
\`\`\`

![](./img/lesson/3/img008.jpg)

## Карусель

Компонент слайд-шоу для цикличного повторения элементов -
карусель изображений или текстовых слайдов.

Обратите внимание на предыдущий/следующий элементы управления.

Рекомендуется использовать элементы <button>, но также можно
использовать элементы <a> с role="button". Пример карусели с тремя слайдами:

\`\`\`html
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
    >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
    >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
\`\`\`

![](./img/lesson/3/img009.jpg)

Карусели не нормализуют автоматически размеры слайдов. Таким образом,
может потребоваться использовать дополнительные утилиты или пользовательские
стили для соответствующего размера содержимого.

Необходимо добавить класс .active к одному из слайдов, иначе карусель не будет
видна. Элементы управления и индикаторы должны иметь атрибут data-bs-target
(или href для ссылок), который соответствует id элемента .carousel.

## Формы

В Bootstrap, "формы" (Forms) - это компонент, который позволяет создавать
стилизованные и интерактивные формы на странице. Формы в Bootstrap
предоставляют удобные средства для сбора информации от пользователей,
таких как ввод текста, выбор опций, загрузка файлов и отправка данных
на сервер.

Bootstrap предлагает множество классов и стилей для создания различных
типов форм. Компоненты форм включают в себя текстовые поля, выпадающие
списки, флажки, переключатели, кнопки и другие элементы, которые могут
быть комбинированы для создания сложных форм.

Пример использования форм в Bootstrap:

\`\`\`html
<form>
    <div class="form-group">
        <label for="name">Имя</label>
        <input type="text"
            class="form-control"
            id="name"
            placeholder="Введите имя">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
            class="form-control"
            id="email"
            placeholder="Введите email">
    </div>
    <div class="form-group">
        <label for="message">Сообщение</label>
        <textarea class="form-control"
            id="message"
            rows="3"
            placeholder="Введите сообщение">
        </textarea>
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>
</form>
\`\`\`

В примере создается простая форма с тремя полями ввода (имя, email
и сообщение) и кнопкой отправки. Классы Bootstrap, такие как
"form-group", "form-control" и "btn", используются для определения
стилей и расположения элементов формы.

Bootstrap предлагает дополнительные классы и компоненты для валидации
форм, создания групп элементов, добавления дополнительных опций и многое
другое. Это позволяет создавать формы, которые соответствуют требованиям
дизайна и функциональности проекта.

Использование форм в Bootstrap упрощает процесс создания стилизованных
и отзывчивых форм на страницах, обеспечивая удобство использования
и хороший пользовательский опыт.

![](./img/lesson/3/img010.jpg)

## Прогрессбар

Прогрессбар - это графический элемент, который позволяет отображать
процент выполнения какой-либо задачи или процесса. Представляет
собой горизонтальную полосу, заполненную цветом в зависимости
от уровня выполнения задачи. Прогрессбары в Bootstrap легко
настраиваются с помощью классов CSS и JavaScript для определения
цвета, ширины, анимации и других параметров. Они часто
используются для отображения прогресса загрузки страницы,
отправки формы или выполнения других длительных операций.

Компоненты Progress состоят из двух HTML-элементов,
CSS для установки ширины и нескольких атрибутов.
Есть возможность складывать индикаторы выполнения,
анимировать их, и использовать текстовые метки.

- Используем .progress в качестве оболочки, чтобы указать максимальное значение индикатора выполнения.
- Оболочке .progress также требуются атрибуты role="progress" и aria, чтобы сделать ее доступной, включая доступное имя (используя aria-label, aria-labelledby или подобное).
- Используем внутренний .progress-bar исключительно для визуальной панели и метки. .progress-bar требует встроенного стиля, служебного класса или пользовательского CSS для установки его ширины.
- Специальный класс .progress-stacked для создания нескольких индикаторов выполнения.

\`\`\`html
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
\`\`\`

![](./img/lesson/3/img011.jpg)

## Фон

Фоновые служебные классы ипользуются,
чтобы изменить внешний вид отдельных индикаторов выполнения.

\`\`\`html
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Пример предупреждения" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Пример опасности" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>
\`\`\`

![](./img/lesson/3/img012.jpg)


`, "lesson4": `

# Настройка

Перед настройкой и  работой с SCSS, настоятельно рекомендуется
ознакомится с курсом по SCSS:

https://www.youtube.com/watch?v=TOlqVNC86XI&list=PL0lO_mIqDDFVv3vF9BG1j1RwfGcQEoxs2

Как это выглядит на сайте:

![](./img/lesson/4/img001.png)

Далее откройте скачанную папку в VSC или любой другой IDE, которая установленна

![](./img/lesson/4/img002.png)

Раскройте папку SCSS

В этой папке находятся все компоненты и классы Bootstrap 5.
В этой папке и будет происходить вся работа

![](./img/lesson/4/img003.png)

Основные файлы это _variables.scss и bootstrap.scss.

![](./img/lesson/4/img004.png)

В папке variables хранятся все переменны Bootstrap 5.
Эти переменные и отвечают за все классы на сайте.

![](./img/lesson/4/img005.png)

Можно заменять значения на прямую, но это не совсем
корректно. Поэтому создадим отделный SCSS файл в
папке SCSS, в котором и будем перезаписывать значения переменных

![](./img/lesson/4/img006.png)

Далее нужно подключить созданный файл к Bootstrap 5.
Обратите внимание, что подключение файл должен находится в самом верху. 
Это нужно, чтобы перезаписывать переменные, которые будут изменены.

![](./img/lesson/4/img007.png)

Далее переопределяем переменные, коллекции и прочее в файле.

![](./img/lesson/4/img008.png)

Значение !default здесь не обязательно, оно нужно если переменная неопределена.

Подробнее:

https://stackoverflow.com/questions/10643107/what-does-default-in-a-css-property-value-meanhttps://bootstrap-4.ru/docs/5.2/customize/sass/?ysclid=ltvib0ozoz705103857

## Полезные ссылки

https://bootstrap-4.ru/docs/5.2/customize/sass/?ysclid=ltvib0ozoz705103857

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
