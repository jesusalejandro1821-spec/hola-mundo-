import "./App.css";
import Vehiculos from "./components/Vehiculos";
function App() {
  return (
    <>
      <h1>Venta de Coches</h1>

      <Vehiculos
        description="Coche 1"
        precio={500}
        agencia="Lagos"
        imagen="https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2024/10/prueba-aston-martin-vanquish-4256121.jpg?tf=1920x"
      />
    </>
  );
}

export default App;
