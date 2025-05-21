import { RouterProvider, createBrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Resultat from "./Pages/Resultat";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/resultat",
        element: <Resultat />,
      },
      {
        path: "*",
        element: <h1>Tu es perdu !</h1>,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
