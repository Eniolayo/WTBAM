import React from "react";
import MoneyToBeEarned from "../Components/MoneyToBeEarned/MoneyToBeEarned";
import MoneyPyramid from "../Components/MoneyPyramid";
import Question from "../Components/Question/Question";
import data from "../Components/QuestionData";
import Default from "../Components/DefaultState/DefaultState";

function App() {
  const rand = Math.ceil(Math.random() * 52);
  const [inputedName, setInputedName] = React.useState("");
  const [questionNumber, setQuestionNumber] = React.useState(rand);
  const [questionIndex, setQuestionIndex] = React.useState(1);
  const [gamestop, setGamestop] = React.useState(false);
  const [moneyEarned, setMoneyEarned] = React.useState("₦ 0");

  if (gamestop) {
    return <Default moneyEarned={moneyEarned} />;
  }

  return (
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
