document.addEventListener(`DOMContentLoaded`, function () {
  const header = document.querySelector(`header`);
  const btnHeader = document.querySelector(`.btn-header`);
  const heroSection = document.querySelector(`.hero-section`);

  function changeColourHeader() {
    const distance = 75;
    const heroSectionBottom = heroSection.offsetTop + heroSection.offsetHeight - distance;

    if (window.scrollY > heroSectionBottom - header.offsetHeight) {
      header.classList.add(`scrolled`);
      btnHeader.classList.add(`scrolled`);
    } else {
      header.classList.remove(`scrolled`);
      btnHeader.classList.remove(`scrolled`);
    }
  }

  changeColourHeader();

  window.addEventListener(`scroll`, changeColourHeader);
});
