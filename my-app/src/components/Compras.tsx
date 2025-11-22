import { useState } from "react";

const Compras = () => {
  interface Ingrediente {
    id: number;
    nombre: string;
  }

  const [listIngredient, setListIngredient] = useState<Ingrediente[]>([]);
  const [ingredientName, setIngredientName] = useState<string>("");
  function addIngredient() {
    if (ingredientName != null) {
      var newItem: Ingrediente;
      newItem = {
        id: 1,
        nombre: ingredientName,
      };
      setListIngredient([...listIngredient, newItem]);
    }
  }
  return (
    <div>
      <h1>LISTA DE COMPRAS</h1>
      <button onClick={addIngredient}>AGREGAR</button>

      <input
        onChange={(element) => setIngredientName(element.target.value)}
        value={ingredientName}
        placeholder="Nombre"
        type="text"
      />

      <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
        </tr>
        {listIngredient.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.nombre}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Compras;
