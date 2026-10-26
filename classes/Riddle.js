// The Riddle class. Export it as the default export.
//
// Properties (received in the constructor):
// - id
// - name
// - taskDescription
// - correctAnswer
//
// Method:
// - ask(prompt)
//   - show the riddle (name and taskDescription) to the player
//   - ask the player for an answer using the `prompt` function that is passed in
//   - keep asking until the answer is correct
export default class Riddle {
  constructor(id, name, taskDescription, correctAnswer) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
  }
  ask(prompt) {
    console.log(`${this.name}: ${this.taskDescription} `);
    let answer = prompt("your answer:");
    while (answer !== this.correctAnswer) {
      console.log("Wrong, try again.");
      answer = prompt("Your answer: ");
    }
     console.log("Correct!");
     console.log("--------------------------");
     
  }
}
