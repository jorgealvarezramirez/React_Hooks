import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiPrimerComponente from "./Components/MiPrimerComponente";
import { Calculadora } from "./Components/Calculadora";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Dashboard />
        <br />
        <Calculadora />
        <br />
        <MiPrimerComponente />
        <br />
      </header>
    </div>
  );
}

export default App;
