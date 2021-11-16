import "./Resultado.css";
import Button from "react-bootstrap/Button";

export const Resultado = ({ resultado, handlerReset }) => {
  const handlerClick = () => {
    handlerReset();
  };

  return (
    <div>
      <h3>Resultado {resultado}</h3>
      <Button variant="warning" onClick={handlerClick}>
        Reset
      </Button>
    </div>
  );
};
