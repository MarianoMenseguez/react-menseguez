import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="¡Pronto estaremos online!" />} />
        <Route path="/category/:id" element={<ItemListContainer greetings="¡Pronto estaremos online!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      
      <p>(c) 2022, Los Piratas Celestes De Alberdi</p>
    </BrowserRouter>
  );
}

export default App;