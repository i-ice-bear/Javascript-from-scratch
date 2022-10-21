//! it works only the replit due to the prompt function run wisely !//


function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    console.log(randomNumber)
    const Difficulties = prompt("Choose your difficulty \b Easy / medium / hard")
  
    if (Difficulties == "easy") {
      let chances_to_play = 10
      console.log(`you have ${chances_to_play} chances`)
      while (true) {
        const getNumber = prompt("Enter your number : ")
        if (getNumber != randomNumber) {
          chances_to_play -= 1
          if (chances_to_play == 0) {
            console.log("You lost")
            console.log(`Your score is ${chances_to_play + 10} `)
            break;
          } else {
            console.log("try again")
            console.log(`Your score is ${chances_to_play + 10} `)
          }
        } else {
          console.log("You won")
          console.log(`Your score is ${chances_to_play + 10} `)
          break;
        }
      }
    }
    if (Difficulties == "medium") {
      let chances_to_play = 5
      console.log(`you have ${chances_to_play} chances`)
      while (true) {
        const getNumber = prompt("Enter your number : ")
        if (getNumber != randomNumber) {
          chances_to_play -= 1
          if (chances_to_play == 0) {
            console.log("You lost")
            console.log(`Your score is ${chances_to_play + 10} `)
            break;
          } else {
            console.log("try again")
            console.log(`Your score is ${chances_to_play + 10} `)
          }
        } else {
          console.log("You won")
          console.log(`Your score is ${chances_to_play + 10} `)
          break;
        }
      }
    }
    if (Difficulties == "hard") {
      let chances_to_play = 3
      console.log(`you have ${chances_to_play} chances`)
      while (true) {
        const getNumber = prompt("Enter your number : ")
        if (getNumber != randomNumber) {
          chances_to_play -= 1
          if (chances_to_play == 0) {
            console.log("You lost")
            console.log(`Your score is ${chances_to_play + 10} `)
            break;
          } else {
            console.log("try again")
            console.log(`Your score is ${chances_to_play + 10} `)
          }
        } else {
          console.log("You won")
          console.log(`Your score is ${chances_to_play + 10} `)
          break;
        }
      }
  
    }
  
  
  }
  generateNumber()