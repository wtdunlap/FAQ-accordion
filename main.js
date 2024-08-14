// shortened variables for ease of access later

const panelOne = document.getElementById("panelOne");
const FAQOne = document.getElementById("FAQOne");
const iconPlusOne = document.getElementById("iconPlusOne");
const iconMinusOne = document.getElementById("iconMinusOne");

const panelTwo = document.getElementById("panelTwo");
const FAQTwo = document.getElementById("FAQTwo");
const iconPlusTwo = document.getElementById("iconPlusTwo");
const iconMinusTwo = document.getElementById("iconMinusTwo");

const panelThree = document.getElementById("panelThree");
const FAQThree = document.getElementById("FAQThree");
const iconPlusThree = document.getElementById("iconPlusThree");
const iconMinusThree = document.getElementById("iconMinusThree");

const panelFour = document.getElementById("panelFour");
const FAQFour = document.getElementById("FAQFour");
const iconPlusFour = document.getElementById("iconPlusFour");
const iconMinusFour = document.getElementById("iconMinusFour");

// event listeners to toggle hidden status on all panels

panelOne.addEventListener("click", () => {
    FAQOne.classList.toggle("hidden");
    iconPlusOne.classList.toggle("hidden");
    iconMinusOne.classList.toggle("hidden");
})
panelTwo.addEventListener("click", () => {
    FAQTwo.classList.toggle("hidden");
    iconPlusTwo.classList.toggle("hidden");
    iconMinusTwo.classList.toggle("hidden");
})
panelThree.addEventListener("click", () => {
    FAQThree.classList.toggle("hidden");
    iconPlusThree.classList.toggle("hidden");
    iconMinusThree.classList.toggle("hidden");
})
panelFour.addEventListener("click", () => {
    FAQFour.classList.toggle("hidden");
    iconPlusFour.classList.toggle("hidden");
    iconMinusFour.classList.toggle("hidden");
})