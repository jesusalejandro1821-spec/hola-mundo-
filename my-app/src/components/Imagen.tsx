interface ImagenProps {
  imagen: string;
  model: string;
}

const Imagen = ({ imagen, model }: ImagenProps) => {
  return (
    <div>
      <img src={imagen} className="w-100" />

      <h1>{model}</h1>
    </div>
  );
};
export default Imagen;
