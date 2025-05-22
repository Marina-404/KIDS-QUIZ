import { RouterProvider, createBrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Resultat from "./Pages/Resultat";
import QuizBoolean from "./Pages/QuizBoolean";
import Errorpath from "./Pages/404.tsx";
import ResultatBoolean from "./Pages/ResultatBoolean.tsx";

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
        path: "/quiz-true-false",
        element:<QuizBoolean />,
      },
      {
        path: "/resultat",
        element: <Resultat />,
      },
            {
				path: "/resultats",
				element: <ResultatBoolean />,
			},
      {
        path: "*",
        element: <Errorpath />,
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
