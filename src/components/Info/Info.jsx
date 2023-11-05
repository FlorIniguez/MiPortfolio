import React from "react";
import "./info.css";
const Info = () => {
  return (
    <div className="container mt-5 info-mia">
      <div className="mt-4 container">
        <h5 className="titulo-info">Hola Mundo</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quibusdam adipisci, esse id quidem exercitationem eius cum nesciunt
          maxime, placeat impedit iste deserunt dolor ut facere aspernatur
          voluptatum sunt perferendis earum. Dicta blanditiis libero porro!
          Aliquid laudantium alias rem, a at delectus molestiae placeat sed
          voluptas hic fuga labore incidunt! Labore explicabo excepturi non
          aperiam delectus, minus atque ipsa animi magni. Veritatis fugit
          officiis explicabo dolores sunt enim accusantium, laborum aut placeat
          omnis? Veritatis, nobis numquam? Sint ducimus veniam numquam
          dignissimos odit quisquam temporibus vero asperiores vel! Sunt numquam
          commodi suscipit blanditiis eos facilis quasi sequi maiores.
          Molestiae, veritatis mollitia!
        </p>
      </div>
      <div className="mt-4 container educacion">
        <h5 className="titulo-info">Resumen </h5>
        <div className=" mt-3">
          <ul className="list-unstyled mt-1 mb-0 mx-2">
            <i className="fa-solid fa-user-graduate icono-educacion mt-3"></i>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-grip-lines-vertical icono-linea mx-1"></i>
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-star icono-star"></i>
              <span className="fw-bold mx-2">Full Stack Java</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-grip-lines-vertical icono-linea mx-1"></i>
               <span className="mx-2">08/2023 - Actualidad</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-star icono-star"></i>
              <span className="fw-bold mx-2">
                Diplomatura Desarrollo Web Full Stack 
              </span>
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-grip-lines-vertical icono-linea mx-1"></i>
             <span className="mx-2"> 2022 - 2023</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-star icono-star"></i>
              <span className="fw-bold mx-2">
                Diplomatura en Ecommerce y Marketing Digital
              </span>
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-grip-lines-vertical icono-linea mx-1"></i>
              <span className="mx-2"> 2022</span>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="mt-4 container">
        <h5 className="titulo-info"> Contacto </h5>
    
      </div>
    </div>
  );
};

export default Info;
