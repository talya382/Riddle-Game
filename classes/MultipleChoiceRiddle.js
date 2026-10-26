import Riddle from "./Riddle.js";

export default class MultipleChoiceRiddle extends Riddle {
  constructor(id, name, taskDescription, correctAnswer,choices,hint) {
    super(id, name, taskDescription, correctAnswer);
    this.choices = choices;
  }
 ask(prompt) {
    console.log(`${this.name}: ${this.taskDescription} `);
    let hintask = false;
    let answer = prompt("your answer (or type 'hint'):");
    while (answer !== this.correctAnswer) {
      if (answer === "hint") {
        if (!this.hint) {
          console.log("No hint available for this riddle.");
        } else if (hintask) {
          console.log(`Hint: ${this.hint}`);
        } else {
          console.log(`Hint: ${this.hint} (+10 seconds penalty)`);
          penaltySeconds += 10;
          hintUsed = true;
        }
      } else {
        console.log("Wrong, try again.");
      }
      answer = prompt("Your answer (number or 'hint'): ");
    }

    console.log("Correct!");
    console.log("--------------------------");
    return penaltySeconds;
  }
}
