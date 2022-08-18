import { useState } from "react";
import MoneyToBeEarned from "../Components/MoneyToBeEarned/MoneyToBeEarned";
import MoneyPyramid from "../Components/MoneyPyramid";
import Question from "../Components/Question/Question";
import data from "../Components/QuestionData";
import Default from "../Components/DefaultState/DefaultState";

function App() {
  const rand = Math.ceil(Math.random() * 52);
  const [inputedName, setInputedName] = useState("");
  const [questionNumber, setQuestionNumber] = useState(rand);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [gamestop, setGamestop] = useState(false);
  const [moneyEarned, setMoneyEarned] = useState("₦ 0");

  return gamestop ? (
    <Default
      moneyEarned={moneyEarned}
      inputedName={inputedName}
      setInputedName={setInputedName}
    />
  ) : (
    <main>
      <Question
        question={data[questionNumber]}
        setQuestionNumber={setQuestionNumber}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
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
