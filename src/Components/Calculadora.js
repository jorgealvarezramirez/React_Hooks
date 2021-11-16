import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Resultado } from "./Resultado";

export const Calculadora = () => {
  // Crear estados
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const handlerNum1 = (e) => {
    setNum1(e.target.value);
  };
  const handlerNum2 = (e) => {
    setNum2(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    setResult(n1 + n2);
  };

  const handlerReset = () => {
    setResult();
    setNum1();
    setNum2();
  };

  return (
    <div>
      <h2>CALCULADORA</h2>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formNumber1">
          <Form.Label>Número 1</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese un número"
            name="num1"
            value={num1}
            onChange={handlerNum1}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber2">
          <Form.Label>Número 2</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese un número"
            name="num2"
            value={num2}
            onChange={handlerNum2}
          />
        </Form.Group>
        <br />

        <Button variant="primary" type="submit">
          Sumar
        </Button>
      </Form>
      <br />
      <Resultado resultado={result} handlerReset={handlerReset} />
      <br />
    </div>
  );
};
