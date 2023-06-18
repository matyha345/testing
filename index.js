$(".home__slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

$(".home__prev").on("click", function (e) {
  e.preventDefault();
  $(".home__slider").slick("slickPrev");
});
$(".home__next").on("click", function (e) {
  e.preventDefault();
  $(".home__slider").slick("slickNext");
});

$(".cards__inner-left").slick({
  // dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  vertical: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        vertical: false,
        // autoplay: true,
        // autoplaySpeed: 1500,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        vertical: false,

      }
    }
  ]
});

$(".cards__prev").on("click", function (e) {
  e.preventDefault();
  $(".cards__inner-left").slick("slickPrev");
});
$(".cards__next").on("click", function (e) {
  e.preventDefault();
  $(".cards__inner-left").slick("slickNext");
});




const colorBlocks = document.querySelectorAll(".colors__inner");

colorBlocks.forEach(function (block) {
  block.addEventListener("click", function () {
    let imagePath = block.getAttribute("best-car");

    document.getElementById("carImage").src = imagePath;

    colorBlocks.forEach(function (colorBlock) {
      colorBlock.classList.remove("active");
    });

    block.classList.add("active");
  });
});




const burgerOpen = document.querySelector(".burger");
const content = document.querySelector(".header__wrapper");

burgerOpen.addEventListener("click", () => {
  content.classList.toggle("header__wrapper-open");
});

window.addEventListener("click", (event) => {
  // Проверяем, что клик произошел не на burger-меню и его содержимое
  if (!burgerOpen.contains(event.target) && !content.contains(event.target)) {
    content.classList.remove("header__wrapper-open");
  }
});