import logo from "./logo.svg";
import "./App.css";
import { CharactersComponent } from "./components/characters";
import { AppBar, Typography } from "@material-ui/core";
import { ContainerPage } from "./containers/containerpage";

function App() {
  return (
    <>
      <AppBar position="static" style={{background:"crimson"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"></img>
      </AppBar>
      <ContainerPage></ContainerPage>
    </>
  );
}

export default App;
