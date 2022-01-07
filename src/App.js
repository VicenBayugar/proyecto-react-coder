import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a AppleStore" />
    </>
  );
}

export default App;
