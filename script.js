const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card .btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const card = btn.parentElement;
        const img = card.querySelector("img");

        popupImg.src = img.src;
        popupTitle.textContent = "Produs #" + (index + 1);

        popup.style.display = "flex";  
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";      
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
});

const buyButtons = document.querySelectorAll(".btn");

buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const product = {
            name: btn.dataset.name,
            price: btn.dataset.price,
            img: btn.dataset.img,
            qty: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Produs adăugat în coș 👜");
    });
});

const cartContainer = document.getElementById("cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach((item, index) => {
    cartContainer.innerHTML += `
        <div class="cart-item">
            <img src="${item.img}">
            <div class="cart-info">
                <h3>${item.name}</h3>
                <p class="cart-price">$${item.price}</p>
            </div>
            <button class="remove" onclick="removeItem(${index})">Șterge</button>
        </div>
    `;
});

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cos.html";
}
