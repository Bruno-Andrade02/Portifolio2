import Nav from "./components/Nav";
/*import Pagina from "./components/Pagina";*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="w-full h-screen"></div>
      <section id='Sobre' className="w-full h-screen"></section>
      <section id='Projetos' className="w-full h-screen"></section>
      <section id='Habilidades' className="w-full h-screen"></section>
      <section id='Contato' className="w-full h-screen"></section>





    </>
    /*<h1 className="text-3xl font-bold underline">Hello world!</h1>*/
  );
}

export default App;
