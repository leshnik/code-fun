if(3 == 3){console.log("3 = 3")};
console.log("Ouvrir console pour voir les messages.")
console.log("Il faut rafraichir la page dans le navigateur pour voir les changements.")
let oranges = 5;
let pommes = 14;
let ananas = 1;
let fruit;
fruit = oranges + pommes + ananas;
console.log(`Il nous reste ${oranges + pommes + ananas} fruits.`);
console.log(`Il nous reste ${fruit} fruits.`)

const forEach = (array,fn) => {
let i;
for(i=0; i<array.length; i++)
fn(array[i])
}
var array = [1,2,3]
forEach(array, (data) => console.log(data))