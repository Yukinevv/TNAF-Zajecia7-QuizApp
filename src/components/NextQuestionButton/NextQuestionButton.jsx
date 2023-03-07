import "./NextQuestionButton.css";

function NextQuestionButton(params) {
  return (
    <button className="quizNextQuestionButton" onClick={params.nextQuestion}>
      Dalej
    </button>
  );
}

export { NextQuestionButton };
