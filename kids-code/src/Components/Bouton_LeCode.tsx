import { useState } from "react";

function BoutonLeCode() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="sniglet-regular bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 text-lg cursor-pointer rounded-full hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition duration-300
"
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Le code
        <br />
        c'est quoi ?
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--color-primary)] rounded-lg p-6 max-w-md text-black text-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ❌
            </button>
            <p>
              Le code informatique, c’est un peu comme une recette de cuisine,
              mais pour les ordinateurs. On lui dit quoi faire, étape par étape
              : afficher un message, poser une question, faire bouger un
              personnage… C’est grâce au code qu’on peut créer des jeux, des
              sites web, des applications, ou même des robots !
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default BoutonLeCode;
