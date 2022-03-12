import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "./App.css";
import Header from "./Header/Header";
import Scene from "./Scenes/Scene";

function App() {
  function getLibrary(provider) {
    return new Web3(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Scene />
    </Web3ReactProvider>
  );
}

export default App;
