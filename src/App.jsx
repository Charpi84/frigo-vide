import { Route, Routes } from "react-router";;
import Recette from './pages/Recette';
import Favoris from './pages/Favoris';
import Accueil from './pages/Accueil';
import RecetteDetail from './pages/RecetteDetail';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/recette" element={<Recette/>}  />
        <Route path="/recette/:id" element={<RecetteDetail/>} />
        <Route path="/favoris" element={<Favoris/>} />
      </Routes>
    </>
  )
}

export default App
