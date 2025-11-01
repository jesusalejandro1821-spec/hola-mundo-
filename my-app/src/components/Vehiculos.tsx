import Imagen from "./Imagen";
import Description from "./Description";

interface VehiculosProps {
  description: string;
  precio: number;
  agencia: string;
  imagen: string;
}

const Vehiculos = ({
  description,
  precio,
  agencia,
  imagen,
}: VehiculosProps) => {
  return (
    <>
      <div className="border border-primary m-2 rounded-2">
        <h2>Info</h2>
        <Imagen imagen={imagen} model="Ferrari" />
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
