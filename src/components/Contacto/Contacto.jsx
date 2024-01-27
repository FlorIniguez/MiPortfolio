import React from "react";

const Contacto = () => {
    return (
        <div className="container mt-4">
            <p><span className="fw-bold">Domiciliio: </span> Buenos Aires - Argentina</p>
            <p><span className="fw-bold">Teléfono: </span> +5491164096722</p>
            <p><span className="fw-bold">Email: </span> iniguezflorencia@gmail.com</p>
            <div className="iconos-contacto">
            <i className="fa-brands fa-linkedin redes p-2 fs-4"></i>
            <i className="fa-brands fa-github redes p-2 fs-4"></i>
            <i className="fa-brands fa-whatsapp redes p-2 fs-4"></i>
            </div>
        </div>
    )
}

export default Contacto;