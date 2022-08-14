import { useEffect } from "react";

import "./moneytobeEarned.css";

function MoneyToBeEarned({
  question,
  MoneyPyramid,
  gamestop,
  setMoneyEarned,
  moneyEarned,
}) {
  useEffect(() => {
    question > 1
      ? setMoneyEarned(MoneyPyramid.find((money) => money.id === question - 1).amount)
      : moneyEarned;
      // console.log(MoneyPyramid.amount)
  }, [question]);
  return (
    <aside>
      {MoneyPyramid.map((money) => {
        return (
          <div
            key={money.id}
            className={
              question === money.id ? "eachQuestion active" : "eachQuestion"
            }
          >
            <p className="moneyId">{money.id}</p>
            <p>{money.amount}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default MoneyToBeEarned;
