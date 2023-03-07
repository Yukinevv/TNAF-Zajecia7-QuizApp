import "./QuestionOption.css";
import { getQuestions } from "../../services/getQuestions";
import { useState } from "react";

function QuestionOption(params) {
  let questions = getQuestions();

  //const [haveAnswer, setHaveAnswer] = useState(false);

  return (
    <>
      {questions[params.questionNumber].options.map((option) => (
        <button
          className="questionAnswerButton"
          onClick={() => {
            params.isCorrectAnswer(option.id);
            //setHaveAnswer(() => (haveAnswer = !haveAnswer));
          }}
        >
          {option.answer}
        </button>
      ))}
    </>
  );
}

export { QuestionOption };
