import "./App.css";
import Vehiculos from "./components/Vehiculos";
function App() {
  return (
    <>
      <h1>Venta de Coches</h1>
      <div className="container">
        <div className="row">
          <div className="col-1 bg-danger">1</div>
          <div className="col-1 bg-primary">2</div>
          <div className="col-1 bg-danger">3</div>
          <div className="col-1 bg-primary">4</div>
          <div className="col-1 bg-danger">5</div>
          <div className="col-1 bg-primary">6</div>
          <div className="col-1 bg-danger">7</div>
          <div className="col-1 bg-primary">8</div>
          <div className="col-1 bg-danger">9</div>
          <div className="col-1 bg-primary">10</div>
          <div className="col-1 bg-danger">11</div>
          <div className="col-1 bg-primary">12</div>
        </div>
      </div>
      <Vehiculos
        model="Sentra"
        description="Coche 1"
        precio={500}
        agencia="Lagos"
        imagen="https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2024/10/prueba-aston-martin-vanquish-4256121.jpg?tf=1920x"
      />
      <Vehiculos
        model="Bocho"
        description="Coche2"
        precio={800}
        agencia="Leon"
        imagen="https://th.bing.com/th/id/R.c2c20057549f157048d23b19ba8ef5f8?rik=KQyryb20gnr7RQ&pid=ImgRaw&r=0"
      />
    </>
  );
}

export default App;
