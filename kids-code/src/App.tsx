import "./App.css";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
