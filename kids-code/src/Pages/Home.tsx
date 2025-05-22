import GirlPicture from "../../public/illustration.webp";
import BoutonLeCode from "../Components/Bouton_LeCode";
function Home() {
  return (
    <>
      <div className="text-center bg-[var(--color-primary)]">
        <img src={GirlPicture} alt="photo of a little girl sitting reading" />
        <article className="sniglet-regular text-[var(--color-text)] pr-2">
        <h2 className="text-[28px]">Règles du quiz</h2>
         <div className="w-1/2 mx-auto h-1 bg-[var(--color-text)]  my-2"/>         
          <p>1 - Lis bien chaque question : prend ton temps</p>
          <p>2 - Choisi une seule bonne réponse parmi les propositions (A,B,C,D)</p>
          <p>3 - Pas besoin d'être parfait : l'important c'est d'essayer</p>
          <p>4 - Tu peux jouer seul ou avec des amis</p>
          <p>5 - A la fin tu découvriras ton score</p>
         </article>
         <button type="button">Prêt? Go!</button>
 <div className="md:hidden">
          <BoutonLeCode />
        </div>
      </div>
    </>
  );
}

export default Home;