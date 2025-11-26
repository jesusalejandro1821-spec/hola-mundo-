import { useState } from "react";
import "./App.css";
/*import Moto from "./components/moto";
import Patin from "./components/Patin";
import Patineta from "./components/Patineta";
import Vehiculos from "./components/Vehiculos";
import Carrusel from "./components/Carrusel";
import Compras from "./components/Compras";
import Mostrar from "./components/Mostrar";*/
import Colors from "./components/Colors";
import Text from "./components/Text";
function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Ingresa un texto"
        onChange={(evento) => setText(evento.target.value)}
      />
      <Text paragraph={text} />
    </div>
  );
}

function App4() {
  const [color, setColor] = useState("text-black");

  return (
    <div>
      <h1 className={color}>Yo voy a cambiar de color</h1>

      <Colors
        className="text-danger"
        text="Rojo"
        buttonColor="btn-danger"
        changeColor={setColor}
      />

      <Colors
        className="text-primary"
        text="Azul"
        buttonColor="btn-primary"
        changeColor={setColor}
      />

      <Colors
        className="text-success"
        text="Verde"
        buttonColor="btn-success"
        changeColor={setColor}
      />
    </div>
  );
}
/*
function App4() {
  return (
    <div>
      <h1>Yo voy a cambiar de color</h1>
      <Colors className="text-danger" text="rojo" />
      <Colors className="text-primary" text="Azul" />
      <Colors className="text-success" text="verde" />
    </div>
  );
}

function App3() {
  const [currentOption, setOption] = useState<number | null>(null);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <button
              onClick={() => setOption(1)}
              type="button"
              className="btn btn-secondary"
            >
              Opcion 1
            </button>
          </div>
          <div className="col-auto">
            <button
              onClick={() => setOption(2)}
              type="button"
              className="btn btn-secondary"
            >
              Opcion 2
            </button>
          </div>
          <div className="col-auto">
            <button
              onClick={() => setOption(null)}
              type="button"
              className="btn btn-secondary"
            >
              Opcion 3
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Seleccionaste la opcion: {currentOption}</h1>

            {currentOption == 1 && <Carrusel />}
            {currentOption == 2 && <Compras />}
          </div>
        </div>
      </div>
    </>
  );
}
function app2() {
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
        description="Co"
        likes={3}
        precio={50000000}
        agencia="Lagos"
        imagen="https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2024/10/prueba-aston-martin-vanquish-4256121.jpg?tf=1920x"
      />

      <Vehiculos
        model="Bocho"
        likes={0}
        description="Coche2"
        precio={800}
        agencia="Leon"
        imagen="https://th.bing.com/th/id/R.c2c20057549f157048d23b19ba8ef5f8?rik=KQyryb20gnr7RQ&pid=ImgRaw&r=0"
      />
    </>
  );
}
function AppVieja() {
  return (
    <div>
      <h1>hola</h1>
      <Moto />
      <div>
        <Patin />
      </div>
      <Patineta />
    </div>
  );
}*/
export default App;
