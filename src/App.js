import "./App.css";
import UserBar from "./components/UserBar";
import Card from "./components/Card";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Card />
      </div>
      <UserBar />
    </div>
  );
}

export default App;
