let name = "Link";
let leftHand = null;
let rightHand = null;
let backpack = [];

backpack.push("Stick"); // Adds to the end of the array
backpack.push("Pot Lid");
backpack.push("Bow");
backpack.push("Food");

console.log(backpack);

let weapon = backpack.shift(); // Removes from the beginning
let shield = backpack.shift();

leftHand = shield;
rightHand = weapon;

console.log(`${name}, with a ${leftHand} and ${rightHand}, he left the village and is off to save Hyrule with nothing but ${backpack.length} items on his person.`);

rightHand = null

backpack.unshift("Sword") //Add at the beginning of the array
rightHand = "Spear"

console.log(backpack)

backpack.splice(2, 1, "Crumbs") // Allows for complex interaction of adding and removing at specific locations
// index, # we want to remove, add to array
console.log(backpack)

backpack.splice(0, 1, "Master Sword")
console.log(backpack)

leftHand = "Shield of Hyrule"

for(let i = 0; i < 3; i++) {
    backpack.push("Food")
}

console.log(backpack)

rightHand = backpack.shift()

console.log(backpack)
console.log(rightHand)

for(let i = 0; i < backpack.length; i++) {
    if(backpack[i] === 'Food') {
        console.log(`${name} found some food! He ate it.`)
        backpack.splice(i, 1, "Crumbs")
    } else {
        console.log(`${name} ignored the ${backpack[i]}`)
    }
}

console.log(backpack)

for(let i = 0; i < backpack.length; i++) {
    if(backpack[i] === "Crumbs") {
        console.log(`${name} cleaned the crumbs!!`)
        backpack.splice(i, 1, "Roses")
    }
}

console.log(backpack)

let gift = backpack.pop()

console.log(`${name} defeated the monster, and gave Princess Zelda ${gift}.`)