import { useDynamicAdapt } from "./dynamicAdapt.js";

useDynamicAdapt();

function init() {
  spoilerFilter();
  mobileMenu();
  rangeInput();
  tabType();
  sliderExample();
}

document.addEventListener("DOMContentLoaded", init());

// document.addEventListener(('click'), (e) => {
//   console.log(e.target);
// })

//====== Header - спойлеры по услугам =================//
function spoilerFilter() {
  //находим все кнопки фильтров
  const filterBtns = document.querySelectorAll(".header__filter-title");
  filterBtns.forEach((item) => {
    //проходим по ним слушаем все кнопки
    item.addEventListener("click", (e) => {
      const btn = e.target; //если по кнопке клик
      btn.classList.toggle("open"); //добавляем класс "open"
      const list = btn.nextElementSibling; //находим соседний элемент
      //если у него есть класс "header__filter-items"
      if (list && list.classList.contains("header__filter-items")) {
        list.classList.toggle("open"); //добавляем класс "open"
        //проходим по остальным кнопкам
        filterBtns.forEach((otherBTn) => {
          const otherList = otherBTn.nextElementSibling;
          //если есть другие фильтры и их кнопка не равна "btn"
          if (
            otherList &&
            otherList.classList.contains("header__filter-items") &&
            otherBTn !== btn
          ) {
            //отключаем у них класс "open"
            otherBTn.classList.remove("open");
            otherList.classList.remove("open");
          }
        });
      }
    });
  });
}

//====== бургер меню ==================================//
function mobileMenu() {
  const openBtn = document.querySelector(".header__mobile-btn");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const closeBtn = document.querySelector(".header__mobile-close");
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  openBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    closeBtn.classList.add("active");
    body.classList.add("no-scroll");
    main.classList.add("bg-color");
  });
  closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    closeBtn.classList.remove("active");
    body.classList.remove("no-scroll");
    main.classList.remove("bg-color");
  });
}

//====== значение бегунка RANGE =======================//
function rangeInput() {
  const range = document.querySelector(".calculator__form-range");
  const output = document.querySelector(".calculator__form-output");

  const onRangeInput = () => {
    const value = range.value;
    output.value = value;
  };

  onRangeInput();
  range.addEventListener("input", onRangeInput);
}

//====== Табы по видам ремонта ========================//
function tabType() {
  const tabsBtn = document.querySelectorAll(".example__type-btn");
  tabsBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      tabsBtn.forEach((button) => {
        button.classList.remove("active");
      });
      e.target.classList.add('active')
    });
  });
}

//====== slider Example ===============================//
function sliderExample() {
  new Swiper(".slider-big__slader", {
    direction: "horizontal",
    slidesPerView: 1,
    navigation: {
      nextEl: ".slider-big__next",
      prevEl: ".slider-big__prev",
    },
    thumbs: {
      swiper: {
        el: ".slider-small__slader",
        slidesPerView: 5,
        breakpoints: {
          1050: {
            direction: "vertical",
            spaceBetween: 6,
          },
          650: {
            direction: "horizontal",
            spaceBetween: 3,
          },
          0: {
            direction: "vertical",
          },
        },
      },
    },
  });
}
