import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Movie /> },
]);