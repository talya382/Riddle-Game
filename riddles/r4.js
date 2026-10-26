// Riddle number 4.
// Export a riddle object as the default export, with these properties:
// - id (number)
// - name (string)
// - taskDescription (string, the riddle text shown to the player)
// - correctAnswer (string)

export default {
  id: 4,
  name: "Number Sequence",
  taskDescription:
    "What do all the numbers in this sequence have in common2, 4, 8, 16, 32 is a power of which number? ",
  correctAnswer: "3",
  choices: ["6", "7", "2", "9"],
  level: "medium",
  limeLimit: 20,
  hint: "Look at how each number relates to the one before it. What do you multiply by to get from 2 to 4, from 4 to 8, and so on?",
};
