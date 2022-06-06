/*
    Construieste un joc QUIZ, care sa contina intrebari despre animale.
    Fiecare intrebare are un singur raspuns corect. 
    Fiecare raspuns corect are 10 puncte.

    La final vreau sa arati in consola de genul:
    Quiz - Animals - 10 Questions
    Correct Answers: 6 
    Wrong Answers: 4
    Total points: 60 
    Total time: 123s. 

    TEMA 1 : 
    Vreau ca utilizatorul sa poata alege doar in intervalul in care are voie:

    Ex. 
      "question": "Ce da vaca?",
      "answers": ["lapte", "branza", "lana"],
      "correctAnswer": 0

    AM VOIE SA RASPUND DOAR CU 1 , 2 sau 3. DACA INTRODUC ALTCEVA , REPETA INTREBAREA
    -----------------------------
    TEMA 2: 
    Cat a durat fiecare intrebare/raspuns
*/

import { readFile } from 'fs/promises';
import prompt from 'prompt-sync';

/*  Read a JSON file */
const pathToAnimalsFile = './data/animals.json';
const { quizesSteps } = JSON.parse(await readFile(new URL(pathToAnimalsFile, import.meta.url)));

const totalQuizSteps = quizesSteps.length;
let currentIndex = 0;
let correctAnswers = 0;

const gameStartTimer = performance.now();
while (currentIndex < totalQuizSteps) {
  console.clear();

  const display =
    quizesSteps[currentIndex].question + ': ' + displayAnswers(quizesSteps[currentIndex].answers);

  const answer = +prompt()(display);

  if (answer - 1 === quizesSteps[currentIndex].correctAnswer) {
    correctAnswers++;
  }

  currentIndex++;
}

const endTime = ((performance.now() - gameStartTimer) / 1000).toFixed();

console.log(`
Quiz - Animals - ${totalQuizSteps} Questions
Correct Answers: ${correctAnswers}
Wrong Answers: ${totalQuizSteps - correctAnswers}
Total points: ${correctAnswers * 10}
/TEMA 2 - START/
Question 1: 3s
Question 2: 4s
Question 3: 12s
Question 4: 1s
/TEMA 2 - END/
Total time: ${endTime}s. 
`);

function displayAnswers(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result = `${result}-[${i + 1}] ${arr[i]}   `;
  }

  return result;
}
