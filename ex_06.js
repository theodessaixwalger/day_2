fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
let fruit = "Banana"
function getIndexFromName(fruit) {
const index = fruits.indexOf(fruit)
if(index === -1){
return null;
}
else {
return index;
} }
function displayResult(result){
console.log(result);
}
displayResult(getIndexFromName(fruit));