import "./QuizResult.css";

function QuizResult(params) {
  return (
    <>
      <p>
        Twój wynik {params.score} / {params.questionsLength}
      </p>
    </>
  );
}

export { QuizResult };
