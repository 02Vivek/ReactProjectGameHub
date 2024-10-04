import { createBrowserRouter } from "react-router-dom";
import FavoriteGamesList from "../components/FavoriteGamesList "; 
import App from "../App";
import GameGrid from "../components/GameGrid";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {path: '', element: <GameGrid />},
      {path: '/favorites', element: <FavoriteGamesList />}
    ]
  },
])

export default router; 
