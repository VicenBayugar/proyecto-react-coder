import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a MegaStore" />
          </Route>
          <Route path="/detalle/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
