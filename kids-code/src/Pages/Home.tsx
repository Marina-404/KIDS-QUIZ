import { useNavigate } from "react-router";
import GirlPicture from "../../public/illustration.webp";
import BoutonLeCode from "../Components/Bouton_LeCode";
import { useState, useEffect } from "react";


const anecdotes = [
  "Le tout premier bug informatique était... un vrai insecte ! Une mite s’était coincée dans un ordinateur en 1947.",
  'Le mot "robot" vient d’un mot tchèque qui veut dire "travail forcé".',
  "Le langage Python ne vient pas du serpent… mais de l’humour des Monty Python, un vieux groupe comique.",
  "Alan Turing, un des papas de l’informatique, adorait les énigmes.",
  "Le tout premier programmeur au monde était une femme, Ada Lovelace, au 19e siècle !",
  'En binaire, "10" veut dire 2. (Pas dix !)',
  "Il y a plusieurs millions de lignes de code dans un simple smartphone.",
  "L’ordinateur peut comprendre uniquement deux choses : des 0 et des 1.",
  "Le site web le plus visité au monde est Google.",
  "Quand tu tapes sur ton clavier, chaque touche envoie un code spécial à l’ordinateur.",
  "Les tout premiers ordinateurs étaient aussi gros qu’une chambre !",
  "Un emoji est une sorte de petit code pour représenter une émotion 😄.",
  'Le mot "informatique" vient de "information" + "automatique".',
  "Certains programmeurs utilisent des émojis ou des chats rigolos dans leurs commentaires de code 🐱‍💻.",
  "Dans Minecraft, tu peux apprendre à coder grâce à la redstone et aux commandes.",
  "Il existe des robots-jouets qui peuvent être codés avec des blocs de couleur !",
  "Scratch, un langage de code pour enfants, utilise des blocs qu’on assemble comme des Lego 🧱.",
  "L’ordinateur le plus puissant du monde peut faire des milliers de milliards de calculs par seconde.",
  "Des enfants de moins de 10 ans ont déjà créé leurs propres jeux vidéo !",
  'Le mot "bug" est maintenant utilisé pour parler de n’importe quel problème dans un programme.',
];

function Home() {
  const navigate = useNavigate();
  const [anecdote, setAnecdote] = useState("");
useEffect(() => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setAnecdote(anecdotes[randomIndex]);
  }, []);
  return (
      <div className="min-h-screen text-center bg-[var(--color-primary)] lg:flex flex-row-reverse justify-center items-center">
        <div className="block1">
        <img 
        src={GirlPicture} 
        alt="photo of a little girl sitting reading" 
        className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] rounded-xl"/>
        </div>
        <div className="block2">
        <article className="sniglet-regular text-[var(--color-text)] pr-2">
        <h2 className="text-[28px]">Règles du quiz</h2>
          <div className="w-1/2 mx-auto h-1 bg-[var(--color-text)]  my-2" />
          <p className="pb-2">1 - Lis bien chaque question : prend ton temps</p>
          <p className="pb-2">
            2 - Choisi une seule bonne réponse parmi les propositions (A,B,C,D)
          </p>
          <p className="pb-2">
            3 - Pas besoin d'être parfait : l'important c'est d'essayer
          </p>
          <p className="pb-2">4 - Tu peux jouer seul ou avec des amis</p>
          <p className="pb-2">5 - A la fin tu découvriras ton score</p>
        </article>
        <button
        className="sniglet-regular bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 m-6 text-lg cursor-pointer rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition duration-300"
        type="button"
        onClick={() => navigate ("/quiz")}
       >
        Questions / Réponses 
       </button>
       <button
        className="sniglet-regular bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 m-6 text-lg cursor-pointer rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition duration-300"
        type="button"
        onClick={() => navigate ("/quiz-true-false")}>
        Vrai ou Faux ?
       </button>
       <div className="md:hidden">
          <BoutonLeCode />
        </div>    
        <p className="text-[var(--color-secondary)] text-2xl pt-8 pb-2 md:pb-8">
          Anecdote :<br />
          {anecdote}
        </p>      
        </div>
      </div>
  );
}

export default Home;