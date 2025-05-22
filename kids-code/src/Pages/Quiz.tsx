import type { Question } from "../types/Question";
import { questionData } from "../data/quizData";
import { useState } from "react";

function Quiz() {
  // question affichée
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // choix du joueur
  const [select, setSelect] = useState<number | null>(null);

  // question actuelle
  const question = questionData[currentQuestion];

  // enregistre la reponse
  const handleClick = (index: number) => {
    setSelect(index); 
  }

  // question suivante
  const nextQuestion = () => {
    if (currentQuestion < questionData.length -1) {
      setCurrentQuestion((oldValue) => oldValue  +1);
      setSelect(null);
    } else {
      alert("quiz finito !");
    }
  }

  return (
    <>
      <div>
        {/* numéro de la question */}
        <h2>
          Question {currentQuestion + 1} / {questionData.length} :
        </h2>
        
        {/* texte de la question  */}
        <p>{question.question}</p>

        {question.answers.map((answer, index) => {

          // est ce que c'est la bonne reponse ?
          const correct = index === question.correctIndex;

          // reponse selectionnée ?
          const selected = index === select;

          let backgroundColor = "bg-white";

        if (select !== null) {
          if(selected && correct) backgroundColor ="bg-green-300";
          else if (selected && !correct) backgroundColor = "bg-red-400";
          else if (correct) backgroundColor = "bg-green-300";
        }
        
        // buttons des réponses
        return (
          <button
          type="button"
          key={index}
          onClick={() => handleClick(index)}
          className={`${backgroundColor}`}
          disabled={select !== null}
          >
            {answer.answer}
          </button>
        );
})};
      </div>

      {/* boutton question suivante */}
      <div>
        {select !== null && (
          <button
          type="button"
          onClick={nextQuestion}
          >
            {currentQuestion === questionData.length -1 ? "" : "Question suivante"}
          </button>
        )};
      </div>
    </>
  );
}

export default Quiz;
