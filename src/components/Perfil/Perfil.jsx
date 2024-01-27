import { Card } from "react-bootstrap";
import fotoPerfil from "../../assets/imgs/foto1.png";
import "./perfil.css";

function CardPerfil() {
  return (
    <Card style={{ width: "18rem" }} className="custom-perfil mt-5">
      <Card.Title className=" fs-4 p-3">
        MARIA FLORENCIA IÑIGUEZ TREJO
      </Card.Title>
      <p className="mx-3"> Full Stack Developer </p>

      <Card.Img
        variant="top"
        src={fotoPerfil}
        className="w-100 img-fluid img-perfil"
      />

      <Card.Body className="w-100 body-card">
        <Card.Text className="text-card mt-3 w-100">
          <ul>
            <li>
              <i className="fa-solid fa-user icono-perfil"></i>
            </li>
            <li className="mx-1">
              <i className="fa-solid fa-grip-lines-vertical icono-linea"></i>
            </li>
            <li>
              <i className="fa-solid fa-star icono-star"></i>
              <span className="fw-bold"> Nombre: </span>&nbsp; Florecia Iñiguez
            </li>
            <li className="mx-1">
              <i className="fa-solid fa-grip-lines-vertical icono-linea"></i>
            </li>
            <li className="fw-bold">
              <i className="fa-solid fa-star icono-star"></i> Full Stack
              Developer
            </li>
            <li className="mx-1">
              <i className="fa-solid fa-grip-lines-vertical icono-linea"></i>
            </li>
            <li>
              <i className="fa-solid fa-star icono-star"></i>
              <span className="fw-bold"> De: </span>&nbsp; Buenos Aires
            </li>
            <li className="mx-1">
              <i className="fa-solid fa-grip-lines-vertical icono-linea"></i>
            </li>
            <li>
              <i className="fa-solid fa-star icono-star"></i>
              <span className="fw-bold"> Disponibilidad: </span>&nbsp; Full-Time
            </li>
            <li className="mx-1">
              <i className="fa-solid fa-grip-lines-vertical icono-linea"></i>
            </li>
          </ul>
        </Card.Text>
        <button className="custom-btn mb-3">
          {" "}
          Descargar CV <i className="fa-solid fa-circle-down fs-4"></i>
        </button>
      </Card.Body>
    </Card>
  );
}

export default CardPerfil;
