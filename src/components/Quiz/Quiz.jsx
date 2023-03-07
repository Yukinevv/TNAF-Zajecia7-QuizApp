import { useState } from "react";
import { getQuestions } from "../../services/getQuestions";
import { NextQuestionButton } from "../NextQuestionButton/NextQuestionButton";
import { Question } from "../Question/Question";
import { QuizResult } from "../QuizResult/QuizResult";
import "./Quiz.css";

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);

  const [score, setScore] = useState(0);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const isCorrectAnswer = (myAnswer) => {
    if (myAnswer === questions[questionNumber].correct) {
      setScore(() => score + 1);
    }
  };

  let questions = getQuestions();
  return (
    <div className="quizContainer">
      <p className="quizHeader">
        Pytanie{" "}
        {questionNumber < questions.length
          ? questionNumber + 1
          : questionNumber}{" "}
        / {questions.length}
      </p>

      {questionNumber < questions.length ? (
        <>
          <Question
            questionNumber={questionNumber}
            isCorrectAnswer={isCorrectAnswer}
          ></Question>
          {isNextButtonVisible ? (
            <div className="quizButtonRow">
              <NextQuestionButton
                nextQuestion={() => setQuestionNumber(() => questionNumber + 1)}
              ></NextQuestionButton>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <div>
          <QuizResult
            score={score}
            questionsLength={questions.length}
          ></QuizResult>
        </div>
      )}
    </div>
  );
}

export { Quiz };
