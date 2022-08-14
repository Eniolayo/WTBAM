import React, { useEffect, useState } from "react";
import "./question.css";

const letters = ["A", "B", "C", "D"];

function Question({
  question,
  setQuestionNumber,
  setGamestop,
  setQuestionIndex,
}) {
  let [optionClicked, setOptionClicked] = useState(null);
  let [timeOut, setTimeOut] = useState(30);
  let [classAdded, setClassAdded] = useState(null);

  useEffect(() => {
    if (timeOut === 0) return time(() => setGamestop(true), 6000);
    const interval = setInterval(() => {
      // setTimeOut((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

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
    time(
      () => setClassAdded(i.correct ? "option correct" : "option wrong"),
      3000
    );
    if (i.correct) {
      time(() => setQuestionNumber((q) => q + 1), 6000);
      time(() => setQuestionIndex((q) => q + 1), 6000);
      time(() => setTimeOut(30), 6000);
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
