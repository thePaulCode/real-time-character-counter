const textAreaElements = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter")

console.log(textAreaElements.getAttribute('maxLength'))
textAreaElements.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {

    totalCounterElement.innerText = textAreaElements.value.length;
    remainingCounterElement.innerText = textAreaElements.getAttribute('maxLength') - textAreaElements.value.length;

}




















