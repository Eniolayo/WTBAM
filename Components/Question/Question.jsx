import React, { useEffect, useState } from "react";
import "./question.css";

const letters = ["A", "B", "C", "D"];

function Question({ question, setQuestionNumber, gamestop, setGamestop }) {
  let [optionClicked, setOptionClicked] = useState(null);
  let [timeOut, setTimeOut] = useState(30);
  let [classAdded, setClassAdded] = useState(null);
  

  // SetTimeout function for recurring usages
  function time(event, speed) {
    setTimeout(() => {
      event();
    }, speed);
  }

  // Answer evaluation function
  function optionEval(i) {
    setOptionClicked(i);
    setClassAdded("option active");
    time(() =>setClassAdded(i.correct ? "option correct" : "option wrong"), 3000);
    if (i.correct) {
      time(() => setQuestionNumber(question.id), 6000);
    } else {
      time(() => setGamestop(true), 6000);
    }
  }

  return (
    <section className="container">
      <div className="timer">{timeOut}</div>
      <div className="question--section">
        <div className="question">
          <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
        </div>
        <div className="option--wrapper">
          {question.answers.map((element, i) => {
            return (
              <div
                key={i}
                className={optionClicked === element ? classAdded : "option"}
                onClick={() => optionEval(element)}
              >
                <p>
                  <span> {letters[i]}</span>
                  {" : "}
                  {element.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Question;
