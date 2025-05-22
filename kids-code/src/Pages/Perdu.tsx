import { NavLink } from "react-router";

function Perdu() {
    return (
        <>
      <section className="min-h-screen text-center bg-[var(--color-primary)]">
        <div>
          <img
            className="w-45 mx-auto md:pt-12"
            src="./public/quiz-termine.png"
            alt="quiz terminé"
          />
          <h1 className="text-[var(--color-text)] text-6xl p-10">
            Tu as Perdu😢
            </h1>
          <div className="text-[var(--color-text)] w-[80%] p-2 mx-auto text-2xl">
            <p>Retente ta chance </p>

          </div>

          <NavLink to="/">
            <button
              className="sniglet-regular bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 mb-6 text-lg cursor-pointer rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition duration-300
"
              type="button"
            >
              Retour à l'accueil
            </button>
          </NavLink>
          <NavLink to="/quiz-true-false">
            <button
              className="sniglet-regular bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 m-6 text-lg cursor-pointer rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition duration-300
"
              type="button"
            >
              REJOUER !
            </button>
          </NavLink>
        </div>
      </section>
        </>
    )
}

export default Perdu;