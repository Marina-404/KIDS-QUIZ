import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="flex bg-[var(--color-primary)] items-center text-5xl justify-start p-3 md:">
        <img
          className="w-30"
          src="./public/logo-kids-code.png"
          alt="Kids Code"
        />
        <h1 className="lilita-one-regular text-[var(--color-text)] pr-2">
          KIDS CODE
        </h1>
        <button
          className="bg-[var(--color-secondary)] text-2xl cursor-pointer hidden md:block md:justify-end"
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Le code c'est quoi ?
        </button>
        {isOpen && (
          <div>
            <p className="text-3xl">
              Le code informatique, c’est un peu comme une recette de cuisine,
              mais pour les ordinateurs. On lui dit quoi faire, étape par étape
              : afficher un message, poser une question, faire bouger un
              personnage… C’est grâce au code qu’on peut créer des jeux, des
              sites web, des applications, ou même des robots ! Et pas besoin
              d’être un génie : tout le monde peut apprendre à coder en
              s’amusant.
            </p>
            <button
              className="bg-[var(--color-secondary)] text-2xl"
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Fermer
            </button>
          </div>
        )}
      </article>
    </>
  );
}

export default Header;
