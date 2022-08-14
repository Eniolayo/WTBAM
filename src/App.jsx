import { useState } from "react";
import MoneyToBeEarned from "../Components/MoneyToBeEarned/MoneyToBeEarned";
import Question from "../Components/Question/Question";
import data from "../Components/QuestionData";

function App() {
  let [questionNumber, setQuestionNumber] = useState(1);
  let [gamestop, setGamestop] = useState(false);
  let [moneyEarned, setMoneyEarned] = useState("₦ 0");

  return gamestop ? (
    <h1>You Earned {moneyEarned}</h1>
  ) : (
    <main>
      <Question
        question={data[questionNumber]}
        setQuestionNumber={setQuestionNumber}
        gamestop={gamestop}
        setGamestop={setGamestop}
      />

      <MoneyToBeEarned question={questionNumber} />
    </main>
  );
}

export default App;
