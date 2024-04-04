"use strict";

const cartContainer = document.querySelector(".cart_details");
const totalPriceContainer = document.querySelector(".total_price .total");
let data = JSON.parse(localStorage.getItem("basketData"));
if (data) {
  showİnsertProduct(data);
  function showİnsertProduct(data) {
    cartContainer.innerHTML = "";
    const html = createCartEl(data);

    updateTotalPrice(data);
    cartContainer.insertAdjacentHTML("beforeend", html);
  }

  function createCartEl(data) {
    let htmlEl = "";
    data.forEach((product) => {
      htmlEl += `
    <div class="col">
        <div class="row cart">
          <div class=" cart_img">
            <img
              class="product_img"
                src="../${product.src}"
              alt="" />
            <span class="product_name">${product.title}</span>
            <img class="delete"
            data-delete=${product.id}
             src="../img/icons/icon-cancel.svg" />
          </div>
        </div>
        <div class="row">$${product.price}</div>
        <div class="row"><input class="normal_number" type="number" value="${
          product.count
        }" />
        </div>   
        <div class="row">$${Number(product.count) * Number(product.price)}</div>
  </div>
    `;
    });
    return htmlEl;
  }

  //totalPrice

  function updateTotalPrice(data) {
    const totalPrice = calcTotalPrice(data);
    totalPriceContainer.innerHTML = `<b>Total: </b> $${totalPrice}`;
  }

  function calcTotalPrice(date) {
    let totalPriceProduct = 0;
    date.forEach((product) => {
      totalPriceProduct += Number(product.price) * Number(product.count);
    });
    return totalPriceProduct;
  }

  //delete function
  cartContainer.addEventListener("click", checkButton.bind(this));

  function checkButton(e) {
    const close = e.target.closest(".delete");
    if (!close) return;

    const curCloseId = close.dataset.delete;
    data = data.filter((product) => Number(product.id) !== Number(curCloseId));
    localStorage.setItem("basketData", JSON.stringify(data));

    const totalPrice = calcTotalPrice(data);

    //animation
    close.parentElement.parentElement.parentElement.classList.add("col_delete");
    setTimeout(() => {
      close.parentElement.parentElement.parentElement.remove();
    }, 400);

    totalPriceContainer.innerHTML = `<b>Total: </b> $${totalPrice}`;
  }
}

// scroll animation
ScrollReveal().reveal(".total_price", {
  duration: 100,
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});

//! daha cox  funksiyalar elave ede bilerdim. Quantity artirildiqda Subtotal totali deyisdirmek ve s. bu proyecti Figma ile isleme bacarigi ucun hazirlamisam.
