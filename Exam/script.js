/* Hello Belt Exam */
console.log("Loading...");

/* Function Sort Products */
var labelOfSort = document.querySelector("#sortSpan");
function sortingSpanChange(element){ 
    labelOfSort.innerText = element.options[element.selectedIndex].text;
}
/* End Function Sort Products */

/* Function Add to Cart */
var count = 0;
var productAdd = document.querySelector("#productInCart");

function addToCart(){
    count++;
    productAdd.innerText=count;
}
/* End Function Add to Cart */