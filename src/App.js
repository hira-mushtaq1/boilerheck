import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/routing";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Header title="My Nav" />
    </div>
  );
}

export default App;
