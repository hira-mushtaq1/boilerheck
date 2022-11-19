import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/routing";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="My Nav" />
      <AppRouter />
    </div>
  );
}

export default App;
