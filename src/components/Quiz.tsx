import React from "react";

export interface QuizProps {
  quiz: {
    question: string;
    options: string[];
    correctOption: number;
  };
  onOptionClick: (selectedOption: number, correctOption: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onOptionClick }) => {
  return (
    <div>
      <p>{quiz.question}</p>
      <ol>
        {quiz.options.map((option, index) => (
          <li
            key={index}
            onClick={() => onOptionClick(index, quiz.correctOption)}
          >
            {option}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Quiz;
