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

function Resultat() {
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
            className="w-40"
            src="./public/quiz-termine.png"
            alt="quiz terminé"
          />
          <h1 className="text-[var(--color-text)] text-6xl p-10">Résultat :</h1>
          <div className="text-[var(--color-text)] w-[80%] p-2 mx-auto text-2xl">
            <p className="p-2">Tu as obtenu ...</p>
            <p>Bravo à toi !</p>
            <p className="pt-10">
              8 à 10 bonnes réponses : Incroyable ! Tu es prêt à coder ton
              premier robot !
            </p>
            <p className="pt-10">
              5 à 7 bonnes réponses : Pas mal ! Tu comprends déjà plein de
              choses.
            </p>
            <p className="pt-10">
              0 à 4 bonnes réponses : Chaque expert a commencé débutant ! Rejoue
              pour t'améliorer.
            </p>
            <p className="text-[var(--color-secondary)] text-2xl pt-10 pb-10">
              Anecdote :<br />
              {anecdote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resultat;
