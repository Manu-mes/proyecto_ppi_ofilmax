import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imagenes/Logo.png';
import Navegacion2 from '../componentes/Navegacion2';
import Footer from '../componentes/Footer';


class Bienvenida2 extends React.Component {
    render() {
        return (
            <div>
                <Navegacion2 />
                <br></br>
                <br></br>
                <div className="container">
                <div className="card text-center " >
                    <img src={Logo} 
                    className="rounded col-md-2 offset-md-5" 
                    alt="" width="250" height="250"/>
                    <div className="card-body">
                        <h5 className="card-title">¡Bienvenidos a Ofilmax!</h5>
                        <p className="card-text">Aquí podrás evidenciar los conocimientos sobre las herramientas Ofimaticas Word, PowerPoint y Excel de tus estudiantes.</p>
                        <p className="card-text">En la parte superior encontrarás la barra de navegación, con los servicios disponibles <br></br> según el Rol que elegiste en tu registro.</p>
                        <Link to="/PaginaInicial2" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Siguiente</strong>
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <Footer/>
            </div>

        );
    }
}

export default Bienvenida2;
