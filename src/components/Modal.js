import React from 'react';
import Rodal from 'rodal';
import Basic from '../components/DragAndDrop'
import 'rodal/lib/rodal.css';


class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      movies: [
        {


        }
      ]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }



  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value

    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    var existing = localStorage.getItem('Movies');
    existing = existing ? existing.split(',') : [];
    this.setState({
      movies: {
        movieTitle: this.state.movieTitle,
        gender: this.state.gender
      }
    })
    existing.push(
      JSON.stringify(this.state.movies)
    );
    localStorage.setItem('Movies', existing.toString());

  };

  render() {
    return (
      <div>
        <button className="add-movie-action" onClick={this.show.bind(this)}>Agregar película</button>
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
          <Basic />
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label>
                Nombre de la película
              </label>
              <input className="movie-title-input" name="movieTitle" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>
                Categoría
              </label>
              <select name="gender" onChange={this.handleChange}>
                <option disabled defaultValue >Elegí una categoría</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>

            <button className="main-btn" type="submit">Subir película</button>
          </form>
        </Rodal>

      </div>
    )
  }
}

export default Modal;