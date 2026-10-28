// Riddle number 5.
// Export a riddle object as the default export, with these properties:
// - id (number)
// - name (string)
// - taskDescription (string, the riddle text shown to the player)
// - correctAnswer (string)

export default {
  id: 5,
  name: "Number Sequence",
  taskDescription: "What comes next? 2, 4, 8, 16, ...",
  correctAnswer: "3",
  choices: ["6", "7", "32", "9"],
  difficulty: "easy",
  limeLimit: 10,
};
