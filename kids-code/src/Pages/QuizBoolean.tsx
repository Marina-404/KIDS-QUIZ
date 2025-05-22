import { trueOrFalseData } from '../data/quizDataBoolean';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function QuizBoolean()  {
    // question affichée
    const [currentQuestionTF, setCurrentQuestionTF] = useState(0);

    // choix du joueur 
    const [selectAnswer, setSelectAnswer] = useState<boolean | null>(null);

    // question actuelle
    const question = trueOrFalseData[currentQuestionTF];

    // enregistre la question
    const handleAnswer = (answer: boolean) => {
        setSelectAnswer(answer);
    }

const navigate = useNavigate();

// derniere question => page resultats
const lastQuestionTF = currentQuestionTF === trueOrFalseData.length - 1;

// question suivante
const handleNextQuestion = () => {
    if (!lastQuestionTF) {
        setCurrentQuestionTF((oldValue) => oldValue +1)
        setSelectAnswer(null);
    } else {
        navigate("/resultat");
    }
};

const buttonStyle = (value:boolean) => {
    if (selectAnswer === null) return "bg-[var(--color-secondary)]";
    if (value === question.answer) return "";
    if (value === selectAnswer && value != question.answer) return "";
    return "bg-[var(--color-secondary)]";
};

return (
    <div  className="text-center text-[var(--color-text)] bg-[var(--color-primary)]">
            {/* numéro de la question */}
            <h2>
              Question {currentQuestionTF + 1} / {trueOrFalseData.length} :
            </h2>
            
            {/* texte de la question  */}
            <p>{question.question}</p>

            <div>
                {["vrai", "faux"].map ((t, index) => {
                    const value = index === 0;

                    return (             
                    <button
                     key={t}
                     onClick={() =>handleAnswer(value)}
                     disabled={selectAnswer !== null}
                     >
                        {t}
                     </button> 
                );
             })}
            </div>
            {selectAnswer !== null && (
                <div>
                    <button
                    onClick={handleNextQuestion}
                    >
                        {lastQuestionTF ? "Félicitation !" : "question suivante"}
                    </button>
                    <p>{question.fact}</p>
                </div>
            )}
              </div>
            );

}

export default QuizBoolean;