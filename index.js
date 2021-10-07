const chalk = require('chalk');
const log = console.log

log(chalk.bgBlue("Let's Test how well you know me?\n"))

var readlineSync = require("readline-sync")

var response = readlineSync.question(chalk.bold.white.bgBlue("Are you ready? (Yes/No) "))
console.log("\n")


if (response.toUpperCase() === "YES") {
  var userName = readlineSync.question(chalk.magenta("What is your name?"))
  console.log("\n")
  log(chalk.bgBlue("Hi " + userName + ". Let the game begin!"))
  console.log("\n")
  log(chalk.black.bgYellowBright("There will be three options for every question. Choose any three of the options by writing a b or c.\n"))

  score = 0;

  questions = [{
    question: "Where do I Live?\na- Lucknow\nb- Bangalore\nc- Mumbai\n",
    answer: "c"
  },
  {
    question: "Which is my favourite Music Band?\na- Megadeth\nb- Coldplay\nc- Beatles\n",
    answer: "b"
  },
  {
    question: "Which place is my Dream Travel Destination ?\na- California\nb- Iceland\nc- Israel\n",
    answer: "b"
  }, {
    question: "Whats my current favourite Genre of Music,that i listen more often?\na- Rap\nb- RnB\nc- Techno\n",
    answer: "a"
  }
  ]

  function play(question, answer) {
    var userAns = readlineSync.question(question)
    if (userAns.toUpperCase() === answer.toUpperCase()) {
      score++
      log(chalk.green("You know this answer! " + "\n" + "Points: " + score))
      console.log("--------")
    } else {
      score--
      log(chalk.red("Are we even Friends?, " + userName + "  :( " + "\n" + "Points: " + score))
      console.log("--------")
    }
  }

  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }

  log(chalk.bgMagenta("Thanks for playing. Your total score is " + score + "\n"))

  log(chalk.yellowBright("\nPrevious Top Scorers:\nKushal: 4\nSahil: 2\nVivek: 4\n"))


  highScores = [3, 2, 1]

  for (i = 0; i < highScores.length; i++) {
    if (score >= highScores[i]) {
      log(chalk.bold.black.bgGreen("You are a top scorer. Please send a screenshot of your score!"))
      break
    }
  }
}
else
  console.log("Thanks for coming.. Goodbye!")
