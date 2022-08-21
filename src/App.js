import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Los piratas Celetes De Alberdi</h1>
      <div>
        <ItemListContainer/>
      </div>
    </div>
  );
};
export default App;
