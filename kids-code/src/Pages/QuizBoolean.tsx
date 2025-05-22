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
        const isCorrect = answer === question.answer;
        setSelectAnswer(answer);
        if (!isCorrect) {
            navigate("/perdu");
        }
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
        navigate("/resultats");
    }
};

return (
<section className="min-h-screen text-center bg-[var(--color-primary)]">
    <div  className="text-center text-[var(--color-text)] bg-[var(--color-primary)]">
            {/* numéro de la question */}
            <h2>
              Question {currentQuestionTF + 1} / {trueOrFalseData.length} :
            </h2>
            
            {/* texte de la question  */}
            <p>{question.question}</p>

            <div>
                {["Vrai", "Faux"].map ((t, index) => {
                    const value = index === 0;
                    const correct = value === question.answer;
                    const selected = value === selectAnswer;

                    let backgroundColor = "bg-[var(--color-secondary)]";

                    if (selectAnswer !== null) {
                        if (selected && correct) backgroundColor = "bg-green-300";
                        else if (selected && !correct) backgroundColor = "bg-red-400";
                        else if (correct) backgroundColor = "bg-green-300";
                    }

                    return (    
                    <div className=" flex flex-col mx-auto text-[var(--color-primary)] sniglet-regular px-6 py-2 text-lg cursor-pointer rounded-xl w-80">
                        <button
                            key={t}
                            onClick={() =>handleAnswer(value)}
                            disabled={selectAnswer !== null}
                            className={`${backgroundColor}`}
                        >
                            {t}
                        </button> 
                     </div>
                );
             })}
            </div>
            {selectAnswer !== null && (
                <div>
                    <button
                    onClick={handleNextQuestion}
                    className="bg-[var(--color-button)] text-[var(--color-secondary)] px-6 py-2 text-lg cursor-pointer rounded-xl w-80"

                    >
                        {lastQuestionTF ? "Félicitation !" : "Question Suivante"}
                    </button>
                    <p>{question.fact}</p>
                </div>
            )}
              </div>
             </section> 
            );

}

export default QuizBoolean;