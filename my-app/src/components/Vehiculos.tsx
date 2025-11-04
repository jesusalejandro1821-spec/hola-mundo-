import Imagen from "./Imagen";
import Description from "./Description";

interface VehiculosProps {
  description: string;
  precio: number;
  agencia: string;
  imagen: string;
  model: string;
}

const Vehiculos = ({
  description,
  precio,
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
  return (
    <div className="container">
      <div className="row border border-primary rounded-2">
        <div className="col-12 col-md-6 col-lg-8">
          <Imagen imagen={imagen} model={model} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Description
            description={description}
            precio={precio}
            agencia={agencia}
          />
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;
