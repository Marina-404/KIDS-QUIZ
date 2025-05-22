import { questionData } from "../data/quizData";
import { useState } from "react";
import { useNavigate } from "react-router";


function Quiz() {
  // question affichée
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // choix du joueur
  const [select, setSelect] = useState<number | null>(null);

  // enregistrer le score
  const [score, setScore] = useState(0);
  
  // question actuelle
  const question = questionData[currentQuestion];

  // enregistre la reponse si elle est vrai implemente +1 à score
  const handleClick = (index: number) => {
    setSelect(index); 
    if (index === question.correctIndex) {
      setScore((valueScore) => valueScore +1);
    }
  };

  const navigate = useNavigate();

  // derniere question => page resultats
  const lastQuestion = currentQuestion === questionData.length - 1;

  // question suivante
  const nextQuestion = () => {
    if (currentQuestion < questionData.length -1) {
      setCurrentQuestion((oldValue) => oldValue  +1);
      setSelect(null);
    } else {
      navigate("/resultat");
    }
  }

  return (
    <div  className="text-center text-[var(--color-text)] bg-[var(--color-primary)]   ">
      <div>
        {/* numéro de la question */}
        <h2>
          Question {currentQuestion + 1} / {questionData.length} :
        </h2>
        
        {/* texte de la question  */}
        <p>{question.question}</p>
        <div></div>
        {question.answers.map((answer, index) => {

          // est ce que c'est la bonne reponse ?
          const correct = index === question.correctIndex;

          // reponse selectionnée ?
          const selected = index === select;

          let backgroundColor = "bg-[var(--color-secondary)]";

        if (select !== null) {
          if(selected && correct) backgroundColor ="bg-green-300";
          else if (selected && !correct) backgroundColor = "bg-red-400";
          else if (correct) backgroundColor = "bg-green-300";
        }
        
        // buttons des réponses
        return (
          <div className=" flex flex-col mx-auto text-[var(--color-primary)] sniglet-regular px-6 py-2 text-lg cursor-pointer rounded-xl w-1/2">
          <button
          type="button"
          key={index}
          onClick={() => handleClick(index)}
          className={`${backgroundColor} rounded-xl h-18`}
          
          disabled={select !== null}
          >
            {answer.answer}
          </button>
          </div>
        );
})}
      </div>

      
      {/* boutton question suivante ou derniere question*/}
      <div>
        {select !== null && (
          lastQuestion ? (
            <button 
            type="button"
            className="mx-auto px-6 py-2 text-lg cursor-pointer rounded-xl w-1/2"
            onClick={() => {
              localStorage.setItem("score", score.toString());
              navigate ("/resultat")}}
            >
              Voir tes resultats 🚀
            </button>
          ) : (
          <button
          type="button"
          onClick={nextQuestion}
          className="mx-auto px-6 py-2 text-lg cursor-pointer rounded-xl w-1/2"
          >
            {currentQuestion === questionData.length -1 ? "" : "Question suivante"}
          </button>
          )
        )}
      </div>

      {/* apparition de la fact en meme temps que le bouton suivant */}
      <div>
        {select !==null && (
          <p>{question.fact}</p>
        )}
      </div>
    </div>
  );
}

export default Quiz;
