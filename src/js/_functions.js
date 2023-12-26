// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('isDesktop')
// }
// if (isTablet()) {
//   console.log('isTablet')
// }
// if (isMobile()) {
//   console.log('isMobile')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from '../functions/validate-forms';
// const rules1 = [];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

// Пример массива с правилами
// const rules2 = [
//   {
//     ruleSelector: '.email',
//     rules: [
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//       {
//         rule: 'email',
//         errorMessage: 'Некорректный ввод email',
//       },
//     ],
//   },
//   {
//     ruleSelector: '.name',
//     rules: [
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//       {
//         rule: 'minLength',
//         value: 3,
//         errorMessage: 'Не меньше 3 символов',
//       },
//       {
//         rule: 'maxLength',
//         value: 15,
//         errorMessage: 'Не более 15 символов',
//       },
//     ],
//   },
//   {
//     ruleSelector: '.password',
//     rules: [
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//       {
//         rule: 'password',
//         errorMessage: 'Не менее 8 символов, одна буква и цифра',
//       },
//     ]
//   },
//   {
//     ruleSelector: '.password-repeat',
//     rules: [
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//       {
//         validator: (value, fields) => {
//           // console.dir(document.querySelector('.password'))
//           // document.querySelector('.password').addEventListener("keydoun", (e) => console.log(e))
//           console.log(value)
//           console.log(fields[3].elem.value)
//           // console.log(fields[2])
//           // console.log(fields[1].elem.value)
//           if (value == fields[3].elem.value) {
//             return true;
//           } else {
//             return false
//           }
//         },
//         errorMessage: 'Пароль должен быть таким же',
//       },
//     ]
//   },
//   {
//     ruleSelector: '.input-tel',
//     tel: true,
//     telError: 'Введите корректный телефон',
//     rules: [
//       {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Заполните телефон!'
//       }
//     ]
//   },
// ];
