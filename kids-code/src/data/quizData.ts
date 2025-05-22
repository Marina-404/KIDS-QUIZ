import type { Question } from "../types/Question";

export const questionData: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un ordinateur comprend ?",
    answers: [
      { answer: "Des images" },
      { answer: "Des phrases en français" },
      { answer: "Des instructions appelées code" },
      { answer: "Des dessins seulement" }
    ],
    correctIndex: 2,
    fact: "L’ordinateur ne comprend pas le français comme nous, mais il sait très bien exécuter des instructions codées, un peu comme une recette de cuisine !"
  },
  {
    id: 2,
    question: "À quoi sert le code ?",
    answers: [
      { answer: "À décorer l'écran" },
      { answer: "À dire à l'ordinateur quoi faire" },
      { answer: "À faire du coloriage" },
      { answer: "À écrire des poèmes" }
    ],
    correctIndex: 1,
    fact: "Le code est le langage secret des ordinateurs ! Grâce à lui, on peut leur dire de faire des choses : afficher un dessin, lancer un jeu, ou même faire voler un drone."
  },
  {
    id: 3,
    question: "Que fait une boucle dans un programme ?",
    answers: [
      { answer: "Elle fait quelque chose une seule fois" },
      { answer: "Elle répète des actions" },
      { answer: "Elle dessine un cercle" },
      { answer: "Elle arrête le programme" }
    ],
    correctIndex: 1,
    fact: "Imagine que tu doives sauter 10 fois à la corde. Plutôt que de dire 'saute' dix fois, tu dis 'répète 10 fois : saute'. C’est exactement ça, une boucle !"
  },
  {
    id: 4,
    question: "Quelle est la bonne façon d’écrire une instruction en JavaScript ?",
    answers: [
      { answer: "`dire Bonjour`" },
      { answer: "`montre: Bonjour`" },
      { answer: "`console.log('Bonjour');`" },
      { answer: "`Bonjour!`" }
    ],
    correctIndex: 2,
    fact: "En JavaScript, `console.log()` sert à afficher des messages dans la console, un peu comme si on écrivait dans un carnet secret pour les développeurs."
  },
  {
    id: 5,
    question: "À quoi sert une variable ?",
    answers: [
      { answer: "À garder une information" },
      { answer: "À dessiner un monstre" },
      { answer: "À envoyer un e-mail" },
      { answer: "À faire une addition" }
    ],
    correctIndex: 0,
    fact: "Une variable, c’est comme une boîte où tu ranges une information. Tu peux la nommer ‘score’, ‘âge’, ou même ‘dragon’, et changer ce qu’il y a dedans !"
  },
  {
    id: 6,
    question: "Qu’est-ce qu’un bug ?",
    answers: [
      { answer: "Un jeu vidéo" },
      { answer: "Une erreur dans le code" },
      { answer: "Un animal qui vit dans l'ordinateur" },
      { answer: "Une mise à jour" }
    ],
    correctIndex: 1,
    fact: "Le tout premier 'bug' informatique était un vrai insecte (une mite !) coincé dans un ordinateur en 1947. Depuis, on appelle 'bug' toute erreur dans le code !"
  },
  {
    id: 7,
    question: "À quoi sert un bouton sur un site web ?",
    answers: [
      { answer: "À changer de couleur" },
      { answer: "À envoyer une action quand on clique" },
      { answer: "À décorer la page" },
      { answer: "À éteindre l’écran" }
    ],
    correctIndex: 1,
    fact: "Un bouton est comme une télécommande : quand on clique, il déclenche quelque chose. Il peut envoyer un message, ouvrir une page, lancer un jeu…"
  },
  {
    id: 8,
    question: "Que fait une condition (if) dans un programme ?",
    answers: [
      { answer: "Elle demande si quelque chose est vrai" },
      { answer: "Elle crie sur l’ordinateur" },
      { answer: "Elle colorie l’écran" },
      { answer: "Elle arrête tout" }
    ],
    correctIndex: 0,
    fact: "Une condition permet au programme de faire un choix. Par exemple : 'si tu cliques sur le bouton, alors affiche un message'. C’est comme une question avec un 'si'."
  },
  {
    id: 9,
    question: "Qu’est-ce qu’un algorithme ?",
    answers: [
      { answer: "Une formule magique" },
      { answer: "Une danse de robot" },
      { answer: "Une suite d'étapes à suivre" },
      { answer: "Un jeu de société" }
    ],
    correctIndex: 2,
    fact: "Un algorithme, c’est une série d’actions à suivre dans un certain ordre. Comme une recette de gâteau : d’abord la farine, puis les œufs, puis on mélange !"
  },
  {
    id: 10,
    question: "Qu’est-ce qu’un site web ?",
    answers: [
      { answer: "Une cabane dans un arbre" },
      { answer: "Un jeu de société" },
      { answer: "Une page qu’on visite sur Internet" },
      { answer: "Une clé USB" }
    ],
    correctIndex: 2,
    fact: "Un site web, c’est comme une vitrine sur Internet. On peut y lire des infos, regarder des vidéos, jouer à des jeux… tout ça grâce au code !"
  }
];