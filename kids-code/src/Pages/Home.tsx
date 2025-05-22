import GirlPicture from "../../public/illustration.webp";
function Home() {
  return (
    <>
      <div>
        <img src={GirlPicture} alt="photo of a little girl sitting reading" />
        <h2>Règles du quiz</h2>
         <div className="separation" />
         <article>
          <p>1 - Lis bien chaque question : prend ton temps</p>
          <p>2 - Choisi une seule bonne réponse parmi les propositions (A,B,C,D)</p>
          <p>3 - Pas besoin d'être parfait : l'important c'est d'essayer</p>
          <p>4 - Tu peux jouer seul ou avec des amis</p>
          <p>5 - A la fin tu découvriras ton score</p>
         </article>
         <button type="button">Prêt? Go!</button>
         <button type="button">le code c'est quoi ?</button>
      </div>
    </>
  );
}

export default Home;