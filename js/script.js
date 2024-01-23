const cartArray = [];

const pack = document.getElementById("pack");
const children = pack.children;
const take = document.getElementById("take");
const addToCart = document.querySelectorAll(".card__button");

class itemCard {
    constructor(card, quantity) {
        this.card = card;
        this.quantity = 1;
    }
}

for (let index = 0; index < children.length; index++) {
    children[index].setAttribute("data-index", index);
}

console.log(addToCart);

[].forEach.call(addToCart, function (el) {
    el.onclick = function () {
        const parentCard = el.closest(".card");
        console.log("add");
        console.log(parentCard.getAttribute("data-index"));
        let cardNumber = parentCard.getAttribute("data-index");
        let probe = findCard(cartArray, cardNumber);
        if (probe === -1) {
            const newCard = new itemCard(cardNumber, 1);
            cartArray.push(newCard);
        }
        if (probe >= 0) {
            cartArray[probe].quantity++;
        }

        render();
    };
});

// Click handler for entire DIV container
take.addEventListener("click", function (e) {
    if (e.target.classList.contains("cartitem__remove")) {
        const card = e.target.getAttribute("data-index");
        let probe = findCard(cartArray, card);
        let checkQuantity = cartArray[probe].quantity;
        if (checkQuantity > 1) {
            cartArray[probe].quantity--;
        }
        if (checkQuantity <= 1) {
            cartArray.splice(probe, 1);
        }
        render();
    }
});

function render() {
    take.innerHTML = `
    <div class="take__header">
            <h2 class="goods__header">Cart Items</h2>
    </div>
    `;
    cartArray.forEach((element) => {
        take.innerHTML += cardBuild(element.card, element.quantity);
    });
}

function cardBuild(number, quantity) {
    number = parseInt(number) + 1;
    let cardHTML = `
            <div class="cartitem">
                <div class="cartitem__imagebox">
                    <img
                        class="cartitem__img"
                        src="img/goods0${number}.png"
                        alt="goods01"
                    />
                </div>
                <div class="cartitem__box">
                <div class="text__container">
                    <h3 class="cartitem__header">MANGO PEOPLE T&#8209SHIRT</h3>
                    <p class="cartitem__info">
                        Price: <span class="cartitem__info_price">$300</span>
                    </p>
                    <p class="cartitem__info">Color: Red</p>
                    <p class="cartitem__info">Size: Xl</p>
                    <div class="cart__quantity">
                        <p class="cartitem__info">Quantity:</p>
                        <p class="cartitem__number">${quantity}</p>
                    </div>
                    </div>
					<div class="cartitem__remove" data-index="${number - 1}">
						<img class="remove__img" src="img/remove.svg" alt="remove">
					</div>
                </div>
            </div>
            `;
    return cardHTML;
}

function findCard(arr, item) {
    return arr.findIndex((e) => e.card === item);
}
