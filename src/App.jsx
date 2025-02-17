
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import roceta from './assets/img/galeria/rocetas-2.jpg';
import caratula from './assets/img/galeria/caratulas.jpg';
import topper from './assets/img/galeria/deco-torta-2.jpg';

function App() {

  return (
    <>
      <NavBar />
      <div className="cards-container">

        <ItemListContainer
          imagen={roceta}
          titulo="Rocetas decorativas"
          descripcion="Hermosa deco para paredes, telas, espacios de fotografia"
        />

        <ItemListContainer
          imagen={caratula}
          titulo="Caratulas escolares"
          descripcion="Arranca el cole con todo con el diseño que mas te guste"
        />

        <ItemListContainer
          imagen={topper}
          titulo="Pinches para muffins, tortas, etc"
          descripcion="Todo tipo de diseños personalizados"
        />

      </div>
    </>
  )
}

export default App