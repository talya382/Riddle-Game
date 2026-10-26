import Riddle from "./Riddle.js";

export default class MultipleChoiceRiddle extends Riddle {
  constructor(id, name, taskDescription, correctAnswer,choices) {
    super(id, name, taskDescription, correctAnswer);
    this.choices = choices;
  }
  ask(prompt) {
    console.log(`${this.name}: ${this.taskDescription} `);
    this.choices.forEach((choice, i) => {
      console.log(`[${i + 1}] ${choice}`);
    });
    let answer = prompt("your answer:");
    while (answer !== this.correctAnswer) {
      console.log("Wrong, try again.");
      answer = prompt("Your answer: ");
    }
    console.log("Correct!");
    console.log("--------------------------");
  }
}
