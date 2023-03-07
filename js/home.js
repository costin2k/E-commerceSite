function addScrollHandlers(containers, nextBtn, preBtn) {
  containers.forEach((container) => {
    const containerWidth = container.getBoundingClientRect().width;

    nextBtn.addEventListener("click", () => {
      container.scrollLeft += containerWidth;
    });

    preBtn.addEventListener("click", () => {
      container.scrollLeft -= containerWidth;
    });
  });
}

const productContainers = document.querySelectorAll(".product-container");
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");
addScrollHandlers(productContainers, nxtBtn, preBtn);

const productContainers2 = document.querySelectorAll(".product-container2");
const nxtBtn2 = document.querySelector(".nxt-btn2");
const preBtn2 = document.querySelector(".pre-btn2");
addScrollHandlers(productContainers2, nxtBtn2, preBtn2);

const productContainers3 = document.querySelectorAll(".product-container3");
const nxtBtn3 = document.querySelector(".nxt-btn3");
const preBtn3 = document.querySelector(".pre-btn3");
addScrollHandlers(productContainers3, nxtBtn3, preBtn3);
