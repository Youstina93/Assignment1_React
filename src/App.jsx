// import './App.css'
import "./Components/Website.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index:true , element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
