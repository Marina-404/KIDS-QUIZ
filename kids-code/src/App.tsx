import "./App.css";
import { Outlet } from "react-router";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <section>
        <Header />
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default App;
