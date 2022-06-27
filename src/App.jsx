import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Navbar from "./components/nav/nav";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
