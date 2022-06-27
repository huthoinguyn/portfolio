import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Navbar from "./components/nav/nav";
import About from "./components/about/about";
import Members from "./components/members/members";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
