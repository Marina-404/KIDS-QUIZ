import { trueOrFalseData } from '../data/quizDataBoolean';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import CorrectAudio from "../../public/kids-code_public_Voicy_Duolingo answer correct sound.mp3";
import BadAudio from "../../public/kids-code_public_Voicy_Bad answer.mp3";
import CongratulationAudio from "../../public/kids-code_public_CRWDApls_Applaudissements 25 50 pers 1 (ID 0812)_LS.mp3"

function QuizBoolean()  {
    const audio = new Audio(CorrectAudio);
  const badAudio = new Audio(BadAudio);
  const congratulationAdio = new Audio (CongratulationAudio);
    // question affichée
    const [currentQuestionTF, setCurrentQuestionTF] = useState(0);

    // choix du joueur 
    const [selectAnswer, setSelectAnswer] = useState<boolean | null>(null);

    // question actuelle
    const question = trueOrFalseData[currentQuestionTF];

    // enregistre la question
    const handleAnswer = (answer: boolean ) => {
        const isCorrect = answer === question.answer;
        setSelectAnswer(answer);
        if (isCorrect){
        audio.play();
    audio.volume = 0.25;  }
        if (!isCorrect) {
             badAudio.play();
             badAudio.volume = 0.25;
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
        congratulationAdio.play();
        congratulationAdio.volume = 0.25;
    
        
    }
};

return (

       <div className="flex-1 h-full flex flex-col justify-center items-center bg-[var(--color-primary)] text-center text-[var(--color-text)]">

            {/* numéro de la question */}
            <h2 className='mb-3 text-3xl'>
              Question {currentQuestionTF + 1} / {trueOrFalseData.length} :
            </h2>
            
            {/* texte de la question  */}
            <p className='mb-7 text-2xl'>{question.question}</p>

            <div className='lg:flex lg:justify-center lg:m-8 lg:mx-48' >
                {["VRAI", "FAUX"].map ((t, index) => {
                    const value = index === 0;
                    const correct = value === question.answer;
                    const selected = value === selectAnswer;

                    let backgroundColor = "bg-[var(--color-secondary)]";

                    if (selectAnswer !== null) {
                        if (selected && correct) backgroundColor = "bg-green-400";
                        else if (selected && !correct) backgroundColor = "bg-red-400";
                        else if (correct) backgroundColor = "bg-green-400";
                    }

                    return (    
                    <div className=" flex flex-col mx-auto text-[var(--color-primary)] sniglet-regular px-4 py-2 pb-4 text-lg cursor-pointer rounded-xl w-60">
                        <button
                            key={t}
                            onClick={() =>handleAnswer(value)}
                            disabled={selectAnswer !== null}
                            className={`${backgroundColor} rounded-xl h-25`}
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
                    className="bg-[var(--color-button)] text-[var(--color-secondary)] lg:mt-0 mt-4 px-6 py-4 text-lg cursor-pointer rounded-xl w-60"

                    >
                        {lastQuestionTF ? "Félicitations ! 🚀" : "Question Suivante"}
                    </button>
                    <p className='text-[var(--color-secondary)] text-lg md:text-1xl pt-8 pb-2 md:pb-8' >{question.fact}</p>
                </div>
            )}
              </div>
)

}

export default QuizBoolean;