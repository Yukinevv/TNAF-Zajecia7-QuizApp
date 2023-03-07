import { getQuestions } from "../../services/getQuestions";
import "./Question.css";
import { QuestionOption } from "../QuestionOption/QuestionOption";

function Question(params) {
  var questions = getQuestions();

  return (
    <div className="questionContainer">
      <p>{questions[params.questionNumber].text}</p>
      <span className="verticalDivider"></span>
      <div className="questionAnswers">
        <QuestionOption
          questionNumber={params.questionNumber}
          isCorrectAnswer={params.isCorrectAnswer}
        ></QuestionOption>
      </div>
    </div>
  );
}

export { Question };
