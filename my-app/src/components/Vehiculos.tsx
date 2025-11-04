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
  return (
    <>
      <div className="border border-primary m-2 rounded-2">
        <h2>Info</h2>
        <Imagen imagen={imagen} model={model} />
        <Description
          description={description}
          precio={precio}
          agencia={agencia}
        />
      </div>
    </>
  );
};

export default Vehiculos;
