import React from "react";
import Form from "react-bootstrap/Form";
import './formu.css'
const Formulario = () => {
  return (
    <Form>
      <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Juan Perez" />
      </Form.Group>
      <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} placeholder="Dejame tu mensaje" />
        <button className="btn-custom mt-2">Enviar</button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
