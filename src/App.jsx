import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./components/Navbar/Navbar";
import CardPerfil from "./components/Perfil/Perfil";
import Info from "./components/Info/Info";

function App() {
  return (
    <>
      <Navbar1 />
      <div className="container d-flex justfy-content-evenly align-items-baseline">
        <CardPerfil/>
        <Info />
      </div>
    </>
  );
}

export default App;
