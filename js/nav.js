const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="subnav">
    <img src="img/sneaker-LOGO.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand,product">
            <button class="search-btn">Search</button>
        </div>
        <a href="#"><i class="ri-user-line"></i></a>
        <a href="#"><i class="ri-shopping-cart-line"></i></a>
        <div class="hamburger-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        </div>
    </div>

</div>
<div class="links-container">
<ul>
    <li class="link-item1"><a href="#" class="link">home</a></li>
    <li class="link-item2"><a href="#" class="link">women</a></li>
    <li class="link-item3"><a href="#" class="link">men</a></li>
    <li class="link-item4"><a href="#" class="link">kids</a></li>

</ul>

</div> `;
};

createNav();

// Hamburger functionality and animation

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navBar = document.querySelector(".links-container");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navBar.classList.toggle("active");
});

// for every link pressed in menubar, remove menubar
document.querySelectorAll(".link-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    navBar.classList.remove("active");
  })
);
