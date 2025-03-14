/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = false;

console.log("Welcome to the Adventure Game!");
console.log("You wake up in a dense forest. In your bag, you have a torch but no map.");
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  console.log("You head toward the mountains.");

  // Nested conditions based on torch and compass
  if (hasTorch) {
    console.log("You use your torch to navigate the dark path.");
    const encounter = readline.question("You encounter a wild animal. Do you 'fight' it or 'run'? ").toLowerCase();

    if (encounter === "fight") {
      if (hasSword) {
        console.log("You draw your sword and defeat the wild animal. You find a treasure chest!");
      } else {
        console.log("You try to fight, but without a weapon, the animal overpowers you. You retreat.");
      }
    } else if (encounter === "run") {
      console.log("You manage to escape, but you drop your torch in the process.");
      hasTorch = false;
    }
  } else {
    console.log("It's too dark to proceed. You turn back.");
  }

} else if (choice === "village") {
  console.log("You decide to head toward the village.");

  // Nested conditions based on map or compass
  if (hasMap || hasCompass) {
    console.log("You use your map or compass to find the quickest path to the village.");
    const event = readline.question("You meet a merchant on the way. Do you 'trade' or 'ignore'? ").toLowerCase();

    if (event === "trade") {
      console.log("The merchant offers you a sword in exchange for your map.");
      if (hasMap) {
        hasMap = false;
        hasSword = true;
        console.log("You now have a sword but no map.");
      } else {
        console.log("Without a map to trade, the merchant refuses to deal with you.");
      }
    } else if (event === "ignore") {
      console.log("You continue on your way and safely reach the village.");
    }
  } else {
    console.log("Without a map or compass, you get lost and wander aimlessly.");
  }

} else {
  console.log("You hesitate too long, and the forest grows darker. You wander aimlessly into the unknown.");
}

console.log("Game over. Your adventure has come to an end.");
 

/*console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}*/

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
