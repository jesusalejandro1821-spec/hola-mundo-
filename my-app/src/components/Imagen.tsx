interface ImagenProps {
  imagen: string;
  model: string;
}

const Imagen = ({ imagen, model }: ImagenProps) => {
  return (
    <div>
      <img src={imagen} width="500" />

      <h1>{model}</h1>
    </div>
  );
};
export default Imagen;
