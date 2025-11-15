import Imagen from "./Imagen";
import Description from "./Description";
import Countdown from "./Countdown";
import Botton from "./Botton";
import { useState } from "react";
interface VehiculosProps {
  description: string;
  likes: number;
  precio: number;
  agencia: string;
  imagen: string;
  model: string;
}

const Vehiculos = ({
  description,
  precio,
  likes,
  agencia,
  imagen,
  model,
}: VehiculosProps) => {
  {
    /* 
    Puntos de quiebre (Breakpoints) de Bootstrap:

    Extra pequeño       Ninguno     0 < 576px
    Pequeño             sm          ≥576px < 767
    Medio               md          ≥768px < 991
    Grande              lg          ≥992px < 1199
    Extra grande        xl          ≥1200px < 1399
    Extra extra grande  xxl         ≥1400px
    */
  }

  const [currentLikes, setCurrentLikes] = useState(likes);
  const addLike = () => {
    setCurrentLikes((valorAnterior) => valorAnterior + 1);
  };
  const [currentFavorito, setFavorito] = useState<boolean | null>(null);

  return (
    <div className="container">
      <div className="row border border-primary rounded-2">
        <div className="col-12 col-md-6 col-lg-8">
          <Imagen imagen={imagen} model={model} />
          <Botton addLike={addLike} />
          <button onClick={() => setFavorito(true)}>Me gusta</button>
          <button onClick={() => setFavorito(false)}>No me gusta</button>
        </div>
        <div>
          {currentFavorito == true && (
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.pRg6tTmnGdB8jDUWOUhtMwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
          )}
          {currentFavorito == false && (
            <img
              src="https://img.freepik.com/vector-premium/no-me-gusta-icono-ningun-simbolo-icono-muestra-ilustracion-vector-circulo-rojo_685751-622.jpg?w=1060"
              alt=""
            />
          )}
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Countdown endDate="2025-12-31 23:59:59" />
          <Description
            description={description}
            precio={precio}
            likes={currentLikes}
            agencia={agencia}
          />
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;
