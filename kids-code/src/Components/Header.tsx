// import { useState } from "react";

function Header() {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <img
          className="w-40 p-2"
          src="./public/logo-kids-code.png"
          alt="Kids Code"
        />
        <h1 className="bg-text">KIDS CODE</h1>
        {/* <button>
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Le code c'est quoi ?
        </button>
        {isOpen && (
          <div>
            <p>
              Le code informatique, c’est un peu comme une recette de cuisine,
              mais pour les ordinateurs. On lui dit quoi faire, étape par étape
              : afficher un message, poser une question, faire bouger un
              personnage… C’est grâce au code qu’on peut créer des jeux, des
              sites web, des applications, ou même des robots ! Et pas besoin
              d’être un génie : tout le monde peut apprendre à coder en
              s’amusant.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Fermer
            </button>
          </div>
        )} */}
      </div>
    </>
  );
}

export default Header;
