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


`, "Сетка": `

`, "Настройка": `


`, "Компоненты": `


`
};





