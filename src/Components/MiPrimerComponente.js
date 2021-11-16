import { useState } from "react";
import Button from "react-bootstrap/Button";

function MiPrimerComponente() {
  const [estado, setEstado] = useState("Valor Inicial");
  const [estado2, setEstado2] = useState("Valor Inicial DOS");

  const handlerClick = (e) => {
    console.log(estado);
    setEstado("Nuevo Valor");
    console.log(estado2);
  };

  const handlerClick2 = () => {
    setEstado2("Nuevo Valor 2 seteado");
  };

  return (
    <>
      <h1>Componente con Hooks _ Jorge Alvarez</h1>
      <h2>Subtitulo de Componente Hooks</h2>
      <Button variant="primary" onClick={handlerClick}>
        Click
      </Button>
      {/* <br /> */}
      <Button variant="success" onClick={handlerClick2}>
        Click2
      </Button>
    </>
  );
}

export default MiPrimerComponente;
