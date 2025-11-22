import { useState } from "react";

// const Mostrar = () => {
//   const [Muestra, setMuestra] = useState(1);
//   const [Ocultar, setOcultar] = useState("Ocultar");
//   const remover = () => {
//     Ocultar == "Ocultar" ? setOcultar("Mostrar") : setOcultar("Ocultar");
//   };
//   const valor = () => {
//     Muestra == 1 ? setMuestra(0) : setMuestra(1);
//     remover();
//   };

//   return (
//     <div>
//       <button onClick={valor}>{Ocultar}</button>

//       {Muestra == 1 && <p>Que pedo</p>}
//     </div>
//   );
// };
// export default Mostrar;

// MEJORA 1
// function ToggleElement() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [text, setText] = useState("Ocultar");

//   const changeVisibility = () => {
//     setIsVisible(!isVisible);
//     setText(isVisible ? "Mostrar" : "Ocultar");
//   };

//   return (
//     <>
//       <button onClick={changeVisibility}>{text}</button>
//       {isVisible && <p>Que onda</p>}
//     </>
//   );
// }

// export default ToggleElement;

// MEJORA 2

// function ToggleElement() {
//   const [isVisible, setIsVisible] = useState(true);

//   const changeVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <>
//       <button onClick={changeVisibility}>
//         {isVisible ? "Ocultar" : "Mostrar"}
//       </button>
//       {isVisible && <p>Que onda</p>}
//     </>
//   );
// }

// export default ToggleElement;

// Mejora 3

function ToggleElement() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>
      {isVisible && <p>Que onda</p>}
    </>
  );
}

export default ToggleElement;
