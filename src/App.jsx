import { useState } from "react";
import MoneyToBeEarned from "../Components/MoneyToBeEarned/MoneyToBeEarned";
import MoneyPyramid from "../Components/MoneyPyramid";
import Question from "../Components/Question/Question";
import data from "../Components/QuestionData";

function App() {
  const rand = Math.ceil(Math.random() * 52);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [gamestop, setGamestop] = useState(false);
  const [moneyEarned, setMoneyEarned] = useState("₦ 0");

  return gamestop ? (
    <h1>You Earned {moneyEarned}</h1>
  ) : (
    <main>
      <Question
        question={data[questionNumber]}
        setQuestionNumber={setQuestionNumber}
        setQuestionIndex={setQuestionIndex}
        gamestop={gamestop}
        setGamestop={setGamestop}
        setMoneyEarned={setMoneyEarned}
        moneyEarned={moneyEarned}
      />

      <MoneyToBeEarned
        question={questionIndex}
        MoneyPyramid={MoneyPyramid}
        gamestop={gamestop}
        setMoneyEarned={setMoneyEarned}
        moneyEarned={moneyEarned}
      />
    </main>
  );
}

export default App;
