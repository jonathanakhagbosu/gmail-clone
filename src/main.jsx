import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/Mail/EmailList";

import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mail",
        element: <Mail />,
      },
      { path: "/", element: <EmailList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
