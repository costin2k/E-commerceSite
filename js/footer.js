const createFooter = () => {
  let Footer = document.querySelector("footer");

  Footer.innerHTML = `<div class="footer-content">
  <div class="newsletter">
    <p>newsletter</p>
    <input
      type="text"
      class="email-input"
      placeholder="enter your email address"
    />
    <button class="subscribe-btn">Subscribe</button>
  </div>

  <div class="footer-ul">
    <ul class="category">
      <div class="category-title">
        men<i class="ri-arrow-drop-down-line arrow1"></i>
      </div>
      <div class="dropdown-links1">
        <li><a href="#" class="footer-link">lifestyle</a></li>
        <li><a href="#" class="footer-link">running</a></li>
        <li><a href="#" class="footer-link">basketball</a></li>
        <li><a href="#" class="footer-link">football</a></li>
      </div>
    </ul>
    <ul class="category">
      <div class="category-title">
        women<i class="ri-arrow-drop-down-line arrow2"></i>
      </div>

      <div class="dropdown-links2">
        <li><a href="#" class="footer-link">lifestyle</a></li>
        <li><a href="#" class="footer-link">running</a></li>
        <li><a href="#" class="footer-link">basketball</a></li>
        <li><a href="#" class="footer-link">football</a></li>
      </div>
    </ul>
    <ul class="category">
      <div class="category-title">
        kids<i class="ri-arrow-drop-down-line arrow3"></i>
      </div>

      <div class="dropdown-links3">
        <li><a href="#" class="footer-link">lifestyle</a></li>
        <li><a href="#" class="footer-link">running</a></li>
        <li><a href="#" class="footer-link">basketball</a></li>
        <li><a href="#" class="footer-link">football</a></li>
      </div>
    </ul>
  </div>
</div>
<div class="footer-social-container">
  <div>
    <a
      href="https://www.instagram.com/"
      target="_blank"
      class="social-link"
      ><i class="ri-instagram-line"></i>Instagram</a
    >
    <a
      href="https://www.facebook.com/"
      target="_blank"
      class="social-link"
    >
      <i class="ri-facebook-box-line"></i>Facebook</a
    >
  </div>
</div>`;
};

createFooter();

// dropdown links
function dropDown(arrow, containerLinks) {
  arrow.addEventListener("click", () => {
    containerLinks.classList.toggle("active");
  });
}

const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const men = document.querySelector(".dropdown-links1");
const women = document.querySelector(".dropdown-links2");
const kids = document.querySelector(".dropdown-links3");
dropDown(arrow1, men);
dropDown(arrow2, women);
dropDown(arrow3, kids);
