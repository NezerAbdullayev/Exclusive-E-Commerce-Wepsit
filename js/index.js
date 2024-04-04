"use strict";
//? insert product to basket

const allProductsContainer = document.querySelectorAll(".products");

if (allProductsContainer) {
  allProductsContainer.forEach((proContainer) => {
    proContainer.addEventListener("click", addToCart.bind(this));
  });

  function addToCart(e) {
    const curData = getCurInformation(e);

    if (curData) {
      const [curId, curPrice, curTitle, curSrc] = curData;
      const data = JSON.parse(localStorage.getItem("basketData")) || [];

      const existingProduct = data.findIndex((product) => product.id === curId);
      if (existingProduct !== -1) {
        const newData = data.map((product) => {
          if (product.id === curId) {
            return { ...product, count: product.count + 1 };
          }
          return product;
        });
        localStorage.setItem("basketData", JSON.stringify(newData));
      } else {
        const newProduct = {
          id: curId,
          title: curTitle,
          price: curPrice,
          src: curSrc,
          count: 1,
        };
        const newData = [...data, newProduct];
        localStorage.setItem("basketData", JSON.stringify(newData));
      }
    }

    function getCurInformation(e) {
      e.preventDefault();
      const curEl = e.target.closest(".add_to_cart");

      if (curEl) {
        const curId = curEl.dataset.id;
        const curPrice = curEl.dataset.price;
        const curTitle = curEl.dataset.title;
        const curSrc = curEl.dataset.src;

        animationInsertButton(curEl);

        return [curId, curPrice, curTitle, curSrc];
      }
    }
    function animationInsertButton(button) {
      button.classList.add("cart_animation");
      setTimeout(() => {
        button.classList.remove("cart_animation");
      }, 4000);
    }
  }
}

// date
const getDate = () => {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");

  const date = new Date();
  days.textContent = date.getDate().toString().padStart(2, "0");
  hours.textContent = date.getHours().toString().padStart(2, "0");
  minute.textContent = date.getMinutes().toString().padStart(2, "0");
  second.textContent = date.getSeconds().toString().padStart(2, "0");
};

setInterval(() => {
  getDate();
}, 1000);

//basa döndür
const stickyElement = document.querySelector(".sticky");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    stickyElement.style.display = "block";
  } else {
    stickyElement.style.display = "none";
  }
});
