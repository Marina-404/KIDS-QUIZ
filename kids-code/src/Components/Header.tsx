import BoutonLeCode from "./Bouton_LeCode";

function Header() {
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
        <div className="hidden md:block md:ml-auto">
          <BoutonLeCode />
        </div>
      </article>
    </>
  );
}

export default Header;
