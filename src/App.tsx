import React from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { quizData } from "./data/QuizData";

import "./styles.css";

export default function App() {
  const handleOptionClick = (selectedOption: number, correctOption: number) => {
    console.log(`Selected Option ${selectedOption}`);
    const isCorrect = checkAnswer(selectedOption, correctOption);
    if (isCorrect) {
      console.log("correct Answer");
    } else {
      console.log("wrong answer");
    }
  };
  function checkAnswer(selectedOption: number, correctOption: number): boolean {
    return selectedOption === correctOption;
  }
  return (
    <div className="App">
      <Header title="Quiz App" />
      {quizData.map((quiz) => (
        <Quiz quiz={quiz} onOptionClick={handleOptionClick} />
      ))}
    </div>
  );
}
