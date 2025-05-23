import type { QuestionTrueOrFalse } from "../types/QuestionType"

export const trueOrFalseData: QuestionTrueOrFalse[] = [
  {
    id: 1,
    question: "Le code permet de donner des instructions à un ordinateur ?",
    answer: true,
    fact: "Le code est un peu comme une langue que seuls les ordinateurs comprennent. Avec lui, on peut tout faire : des sites, des jeux, des robots !"
  },
  {
    id: 2,
    question: "Une variable sert à colorier l’écran ?",
    answer: false,
    fact: "Même si ce n’est pas son but, une variable peut contenir la couleur à afficher. Mais son rôle principal, c’est de stocker des informations."
  },
  {
    id: 3,
    question: "Une boucle permet de répéter des actions plusieurs fois ?",
    answer: true,
    fact: "Les boucles sont très utiles pour répéter une tâche sans tout réécrire. C’est comme un refrain dans une chanson !"
  },
  {
    id: 4,
    question: "Le mot 'console' en JavaScript sert à allumer l’ordinateur ?",
    answer: false,
    fact: "`console.log()` ne sert pas à allumer quoi que ce soit, mais à afficher un message dans un coin secret du navigateur qu’on appelle la 'console'."
  },
  {
    id: 5,
    question: "Un bug est une erreur dans le programme ?",
    answer: true,
    fact: "Les bugs sont les ennemis jurés des codeurs. Mais les corriger, c’est aussi ce qui rend le métier super amusant : c’est comme résoudre une énigme !"
  },
  {
    id: 6,
    question: "On peut coder un jeu vidéo avec du code ?",
    answer: true,
    fact: "Minecraft, Pokémon, et même Mario ont tous été codés ! Tu peux toi aussi créer ton propre jeu en apprenant les bases du code."
  },
  {
    id: 7,
    question: "Une fonction sert uniquement à dessiner des formes ?",
    answer: false,
    fact: "Une fonction peut tout faire : envoyer un message, faire un calcul, ouvrir une porte dans un jeu... c’est une super boîte à outils !"
  },
  {
    id: 8,
    question: "On peut apprendre à coder même sans être adulte ?",
    answer: true,
    fact: "Beaucoup d’enfants commencent à coder avant 10 ans ! Il existe même des langages spécialement pensés pour eux, comme Scratch."
  },
  {
    id: 9,
    question: "HTML est un langage pour parler aux robots ?",
    answer: false,
    fact: "HTML sert à créer la structure des pages web, comme les titres, les paragraphes, les images. Les robots ? Eux, ils préfèrent d'autres langages !"
  },
  {
    id: 10,
    question: "JavaScript est utilisé pour rendre les sites web interactifs ?",
    answer: true,
    fact: "JavaScript, c’est le magicien du web ! Grâce à lui, les sites peuvent bouger, réagir, afficher des animations… et même faire des jeux."
  }
]