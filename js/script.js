let pack = document.getElementById("pack");
let children = pack.children;
// element.childElementCount
console.log(pack);
console.log(pack.children);
console.log("Hello world");

for (let index = 0; index < children.length; index++) {
    children[index].setAttribute("data-index", index)
    console.log("!!!");
    console.log(children[index]);

}

// for (const child of pack.children) {
//     console.log(child.tagName);
//     child.setAttribute("data-index", "pillows")

// }

const addToCart = document.querySelectorAll(".card__button");

console.log(addToCart);

[].forEach.call(addToCart, function (el) {
    el.onclick = function () {
        console.log("add")
        console.log(el.getAttribute);
    }


});