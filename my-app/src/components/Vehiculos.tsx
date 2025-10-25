interface VehiculosProps {
  description: string;
  precio: number;
  agencia: string;
  imagen: string;
  
}

const Vehiculos = ({ description, precio, agencia, imagen}: VehiculosProps)=> {
  return (
    <>
      <div>
        <h2>info</h2>
        description {description} <br /> 
        precio {precio} <br />
        agencia {agencia} <br />
                <img
          src={imagen}
            />
      </div>
    </>
  );
}

export default Vehiculos;
