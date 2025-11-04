interface DescriptionProps {
  description: string;
  precio: number;
  agencia: string;
}

function Description({ description, precio, agencia }: DescriptionProps) {
  return (
    <>
      <div className="border border-4 rounded-3 border-secondary m-3">
        <p className="bg-primary">Descripcion general del vehiculo</p>
        <p>
          <span className="fw-bold">Description</span>=
          <span className="text-primary">{description} </span>
        </p>

        <p>
          <span className="fw-bold">El precio es </span>=
          <span className="text-success">{precio} </span>
        </p>
        <p>
          <span className="fw-bold">Agencia</span>={" "}
          <span className="text-info">{agencia}</span>
        </p>
      </div>
    </>
  );
}

export default Description;
