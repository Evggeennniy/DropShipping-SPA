document.querySelector("#buy-btn").addEventListener("click", () => {
  document.querySelector(".main").classList.toggle("toggled");
  const buyBtn = document.querySelector("#action-btn-title");
  buyBtn.textContent = buyBtn.textContent == "Buy" ? "Details" : "Buy";
});

document.querySelector(".product__view").addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("product__img--sml")) {
    const newImgLink = target.getAttribute("src");

    const currentImg = document.querySelector("#current-product-img");
    currentImg.style.content = `url(${newImgLink})`; // Применение через content
  }
});
