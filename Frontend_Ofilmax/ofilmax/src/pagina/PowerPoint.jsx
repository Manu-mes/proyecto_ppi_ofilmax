import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Powerpoint from '../imagenes/Powerpoint.png'
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';

class Powerpoint extends React.Component {
    render() {
        return (
             <div>
        <Navegacion />
        <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
        <div className="container text-center">
        <br/>
        <h4>¡Bienvenido a la evaluación de Power Point!</h4>

        <div className="container">
        <div className="row">
        <div className="col-md-3 offset-md-3">
        <img src={Powerpoint} className="" alt="..." />
        </div>
        <div className="col-md-3">
        <p className="text-center card-title"><br></br>¡Hola!<br></br>
        Mi nombre es Power Point, o tambien me llaman <br></br> Diapositivas, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p>
        </div>
        </div>
        <div className="jumbotron jumbotron-fluid alert-light border border-danger mb-3">
       <div className="container">
       <h4 className="text-danger">Pregunta N°1</h4>
       <p class="text-body">¿Power Point es un prograna diseñado para hacer presentaciones?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://4.bp.blogspot.com/-6pwF-lQ3OrU/XBWcmQcYGWI/AAAAAAAAA2o/nxi7RbD4ysAQH_aIe_rOqau6xYPYTccDQCLcBGAs/s1600/pp.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°2</h4>
       <p class="text-body">¿Para agragar una transión debo de dar click en la ficha diseño?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://media.tenor.com/images/b86e84b7138cdbb20e42e86e161c2fdb/tenor.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°3</h4>
       <p class="text-body">¿Cómo añado una nueva diapositiva?</p>

       <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label class="form-check-label" for="exampleRadios1">
    Menú ARCHIVO
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Menú REVISAR
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
  <label class="form-check-label" for="exampleRadios3">
    Menú INICIO-NUEVA DIAPOSTIVA
  </label>
</div>
       <br/>
       <img src="https://wideo.co/wp-content/uploads/2017/11/Gif-Presentation-mode.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°4</h4>
       <p class="text-body">¿En PowerPoint, podemos personalizar nuestra presentación?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://atrevete.academy/blog/wp-content/uploads/2020/03/giphy-3.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°5</h4>
       <p class="text-body">¿Es posible colar la cantidad de diapositivas que necesitamos antes de colocar el contenido en cada una?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://excelfull.com/wp-content/uploads/2018/05/aprender-powerpoint.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>
        <div className="container">
        <Link to="/confirmacion" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Finalizar</strong>
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

export default PowerPoint;