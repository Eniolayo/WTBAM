import React, { useEffect, useState } from "react";
import "./question.css";

const letters = ["A", "B", "C", "D"];

function Question({
  question,
  setQuestionNumber,
  setGamestop,
  setQuestionIndex,
  questionIndex,
}) {
  const [optionClicked, setOptionClicked] = useState(null);
  const [timeOut, setTimeOut] = useState(30);
  const [classAdded, setClassAdded] = useState(null);
  const [lose] = useState(new Audio("../../Assets/Lose.mp3"));
  const [win] = useState(new Audio("../../Assets/Win.mp3"));

  // SetTimeout function for recurring usages
  function time(event, speed) {
    setTimeout(() => {
      event();
    }, speed);
  }

  useEffect(() => {
    let interval;
    if (timeOut === 0) {
      time(() => setGamestop((prev) => !prev), 1000);
      return time(() => lose.play(), 10);
    } else {
      interval = setInterval(() => {
        setTimeOut((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  });

  // Answer evaluation function
  function optionEval(i, e) {
    setOptionClicked(i);
    setClassAdded("option active");
    time(
      () => setClassAdded(i.correct ? "option correct" : "option wrong"),
      3000
    );
    if (i.correct) {
      if (questionIndex === 15) return setGamestop((prev) => !prev);
      time(() => setQuestionNumber((q) => q + 1), 6000);
      time(() => setQuestionIndex((q) => q + 1), 6000);
      time(() => setTimeOut(30), 6000);
      time(() => win.play(), 5000);
    } else {
      time(() => lose.play(), 5000);
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
                onClick={() => optionEval(element, question.answers)}
              >
                <p>
                  <span> {letters[i]}</span>
                  {" : "}
                  <span
                    dangerouslySetInnerHTML={{ __html: element.text }}
                  ></span>
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
