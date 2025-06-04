export function carousel() {
  new Swiper(".swiper",{
    slidesPerView: 1,
      // spaceBetween: 25,
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });

  // MOdal publicitario
  new Swiper(".swiper2",{
    slidesPerView: 1,
    // spaceBetween: 25,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    });

}
