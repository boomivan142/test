const listEl = document.querySelector("#list-slider");
const btnRightEl = document.querySelector(".right");
const btnLeftEl = document.querySelector(".left");

const scrollList = () => {
  if (listEl.scrollLeft < listEl.scrollWidth - listEl.clientWidth) {
    btnRightEl.style.display = "flex";
  } else {
    btnRightEl.style.display = "none";
  }

  if (listEl.scrollLeft > 10) {
    btnLeftEl.style.display = "flex";
  } else {
    btnLeftEl.style.display = "none";
  }
};

const getCardStep = () => {
  const card = document.querySelector(".card");
  if (!card) return 0;

  const cardStyles = window.getComputedStyle(listEl);
  const gap = parseInt(cardStyles.gap) || 0;
  return card.offsetWidth + gap;
};

const scrollBtnRight = () => {
  const step = getCardStep();
  listEl.scrollBy({
    left: step * 3, // 👈 3 карточки
    behavior: "smooth",
  });
};
const scrollBtnLeft = () => {
  const step = getCardStep();
  listEl.scrollBy({
    left: -step * 3,
    behavior: "smooth",
  });
};

listEl.addEventListener("scroll", scrollList);
btnRightEl.addEventListener("click", scrollBtnRight);
btnLeftEl.addEventListener("click", scrollBtnLeft);



const buttonBurger = document.querySelector(".button-burger");



const btnCloseModal = document.querySelector("#btn-close");
const modalEl = document.querySelector('.modale')

buttonBurger.addEventListener('click', ()=>{
    modalEl.style.display = "flex";
})

btnCloseModal.addEventListener('click', ()=>{
    modalEl.style.display = 'none'
})
