import { useState } from "react";
import Vehiculos from "./Vehiculos";
type Vehiculo = {
  description: string;
  imagen: string;
};
var listaVehiculos: Vehiculo[] = [
  {
    description: "descripcion",
    imagen: "imagen.jpg",
  },
  {
    description: "descripcion 2",
    imagen: "imagen 2.jpg",
  },
];

const Carrusel = () => {
  var listaImagenes: string[] = [
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
    "https://www.costco.com.mx/medias/sys_master/products/h3f/h90/175582558093342.jpg",
    "https://th.bing.com/th/id/OIP.6DYxIGBnGcGY-A3dwKZsZgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.meganoticias.mx/uploads/noticias/carrusel-monumental-de-guadalajara-sera-inaugurado-el-proximo-lunes-398433.png",
  ];
  const [currentIndice, setCurrentIndice] = useState<number>(0);

  return (
    <div>
      <h1>Carrusel de imagenes</h1>;
      <img src={listaImagenes[currentIndice]} width={100} alt="" />
      <button
        disabled={currentIndice == 0 ? true : false}
        onClick={() => setCurrentIndice((currentIndice) => currentIndice - 1)}
      >
        anterior{currentIndice}
      </button>
      <button
        disabled={currentIndice >= listaImagenes.length - 1}
        onClick={() => setCurrentIndice((currentIndice) => currentIndice + 1)}
      >
        siguiente {currentIndice}
      </button>
    </div>
  );
};
export default Carrusel;
