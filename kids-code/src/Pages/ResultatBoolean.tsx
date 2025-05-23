import { useState, useEffect } from "react";
import { Link } from "react-router";
import pictureRobot from "../../public/quiz-termine.png";

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

function ResultatBoolean() {
  const [anecdote, setAnecdote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setAnecdote(anecdotes[randomIndex]);
  }, []);

  return (
    <>
      <section className="text-center bg-[var(--color-primary)]">
        <div>
          <img
            className="w-45 mx-auto md:pt-12"
            src={pictureRobot}
            alt="quiz terminé"
          />
          <div className="text-[var(--color-text)] w-[80%] p-2 mx-auto text-2xl">
            <p>
              10 sur 10 ! Tu es un(e) vrai(e) pro du code, rien ne t'arrête !🚀
            </p>
            <p className="text-[var(--color-secondary)] text-2xl pt-10 pb-2 md:pb-8">
              Anecdote :<br />
              {anecdote}
            </p>
          </div>

          <Link to="/">
            <button
              className="sniglet-regular bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 mb-5 text-lg cursor-pointer rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition duration-300
"
              type="button"
            >
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default ResultatBoolean;

