interface ColorProps {
  className: string;
  text: string;
  changeColor: (color: string) => void;
  buttonColor: string;
}

const Colors = ({ className, text, changeColor, buttonColor }: ColorProps) => {
  return (
    <div>
      <button
        title={"btn " + buttonColor}
        className={`btn ${buttonColor}`}
        onClick={() => changeColor(className)}
      >
        Cambiar a {text}
      </button>
    </div>
  );
};

export default Colors;

// import { useState } from "react";
// interface ColorProps {
//   name: string;
//   text: string;
// }

// const Colors = ({ name, text }: ColorProps) => {
//   const [color, setColor] = useState("text-black");
//   return (
//     <div>
//       <div>
//         <button onClick={() => setColor(name)}>{text}</button>
//       </div>
//     </div>
//   );
// };
// export default Colors;
