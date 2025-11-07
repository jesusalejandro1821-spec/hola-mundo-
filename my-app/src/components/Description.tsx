interface DescriptionProps {
  description: string;
  precio: number;
  agencia: string;
}

function Description({ description, precio, agencia }: DescriptionProps) {
  const maxChars = 3; // máximo de caracteres permitidos
  const isLong = description.length > maxChars; // Revisa si la descripsion es mas larca que Maxchars
  const truncated = isLong //Si es larga → corta y agrega …, si no → deja igual
    ? description.substring(0, maxChars) + "…" //
    : description; //Si isLong es verdadero, corta el texto y agrega …
  //Si isLong es falso, deja el texto como está.
  const attrs = isLong ? { title: description } : {};
  return (
    <div className="border border-4 rounded-3 border-secondary m-3 p-2">
      <p className="bg-primary text-white p-2">
        Descripción general del vehículo
      </p>

      {/* Tooltip nativo con solo title, SIN CSS */}
      <p>
        <span className="fw-bold">Descripción = </span>
        {/*Escribe "Descripción =", en negritas.*/}
        <span className="text-primary" {...attrs}>
          {/*//Muestra el texto recortado en azul, y habilita el tooltip.*/}
          {truncated} {/* Inserta el texto recortado con … si era largo.*/}
        </span>
      </p>

      <p>
        <span className="fw-bold">Precio = </span>
        <span className="text-success">
          {precio.toLocaleString("es-MX", {
            style: "currency", // Convierte el número en dinero con formato de pesos mexicanos
            currency: "MXN",
            minimumFractionDigits: 0, // elimina decimales, si los quieres pon 2
          })}
        </span>
      </p>

      <p>
        <span className="fw-bold">Agencia = </span>
        <span className="text-info">{agencia}</span>
      </p>
    </div>
  );
}

export default Description;
