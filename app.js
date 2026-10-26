// Entry point of the game. Run it with: node app.js
//
// This file should:
// 1. Import PromptSync (from 'prompt-sync') and create the `prompt` function.
// 2. Import the Riddle class, the Player class, and the array of all riddles (from riddles/index.js).
// 3. Show a welcome message and ask the player for their name, then create a Player object.
// 4. Loop over all riddles. For each riddle:
//    - save the start time (Date.now())
//    - create a Riddle object and call its ask() method
//    - save the end time (Date.now())
//    - save the time using player.recordTime()
// 5. After the loop, call player.showStats() to show total time and average time per riddle.

import PromptSync from "prompt-sync";
import Player from "./classes/Player.js";
import arrRiddle from "./riddles/index.js";
import Riddle from "./classes/Riddle.js";
import MultipleChoiceRiddle from "./classes/MultipleChoiceRiddle.js";

const prompt = PromptSync();

console.log("welcome let's start play ");
const name = prompt("What is your name?");

const player = new Player(name);
console.log(`Hellow ${player.name} let's start`);
const validLevels = ["easy", "medium", "hard"];
let level = prompt("Choose difficulty: easy / medium / hard: ");
while (!validLevels.includes(level)) {
  console.log("Invalid level, try again.");
  level = prompt("Choose difficulty: easy / medium / hard: ");
}
const filteredRiddles = [];
for (const r of arrRiddle) {
  if (r.level === level) filteredRiddles.push(r);
}
console.log("You chose " + level);
console.log("Number of riddles: " + filteredRiddles.length);
filteredRiddles.sort(() => Math.random() - 0.5);
const PENALTY_SECONDS = 5;
for (const r of filteredRiddles) {
  const startTime = Date.now();
  const riddle = new MultipleChoiceRiddle(
    r.id,
    r.name,
    r.taskDescription,
    r.correctAnswer,
    r.choices,
    r.hint,
  );
  const hintPenaltySeconds = riddle.ask(prompt);
  const end = Date.now();
  const secondsTaken = (end - startTime) / 1000;
  let penaltySeconds = hintPenaltySeconds;
  if (secondsTaken > r.limeLimit) {
    console.log(`Too slow! ${PENALTY_SECONDS} seconds penalty applied.`);
    penaltySeconds += PENALTY_SECONDS;
  } else {
    console.log(`yow did it ${secondsTaken}s`);
  }
  player.recordTime(startTime, end + penaltySeconds * 1000);
}
player.showStats();
