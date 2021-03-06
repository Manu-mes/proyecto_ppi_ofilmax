import React from 'react';
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';

class Resultados extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <br></br>
                <br></br>
                <div className="container col-md-6">
                    <div className="card text-center">
                        <div className="card-header">
                            Resultados de las Evaluaciones realizadas</div>
                            <div className="card-body">
                        <div className="card-body">
                            <h5 className="card-title">Herramienta Ofimatica: Word</h5>
                            <p className="card-text">Evaluación de Word. 10/9/2020  5:30 pm<br></br>Puntaje: 5/5  ALTO</p>
                            <a href="" class="btn btn-outline-info">Ver más...</a>
                        </div>
                        <div className="card-footer text-muted">
                            Hace 3 días</div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="container col-md-6">
                    <div className="card text-center">
                        <div className="card-header">
                            Resultados de las Evaluaciones realizadas</div>
                            <div className="card-body">
                        <div className="card-body">
                            <h5 className="card-title">Herramienta Ofimatica: PowerPoint</h5>
                            <p className="card-text">Evaluación de PowerPoint. 10/10/2020  4:30 pm<br></br>Puntaje: 4/5  ALTO</p>
                            <a href="" class="btn btn-outline-danger">Ver más...</a>
                        </div>
                        <div className="card-footer text-muted">
                            Hace 3 días</div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="container col-md-6">
                    <div className="card text-center">
                        <div className="card-header">
                            Resultados de las Evaluaciones realizadas</div>
                            <div className="card-body">
                        <div className="card-body">
                            <h5 className="card-title">Herramienta Ofimatica: Excel</h5>
                            <p className="card-text">Evaluación de Excel. 9/10/2020  12:30 pm<br></br>Puntaje: 3/5  MEDIO</p>
                            <a href="" class="btn btn-outline-success">Ver más...</a>
                        </div>
                        <div className="card-footer text-muted">
                            Hace 4 días</div>
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

export default Resultados;
