import React from "react";
import MoneyPyramid from "../MoneyPyramid.js";
import "./moneytobeEarned.css";

function MoneyToBeEarned({ question }) {
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
