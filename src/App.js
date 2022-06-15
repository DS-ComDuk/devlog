import "./App.css";
import UserBar from "./components/UserBar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Card />
      </div>
      <UserBar />
    </div>
  );
}

export default App;
