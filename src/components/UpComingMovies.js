import React from 'react';
import { ReactComponent as AddList } from '../images/add-list.svg'
import { ReactComponent as PlayCircle } from '../images/play-circle.svg'
import { ReactComponent as ArrowLarge } from '../images/arrow-large.svg'

class UpComingMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      upComingMovies: []
    }
  }


  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      .then(res => res.json())
      .then((data) => {
        const firstSoonMovies = data.results.slice(0, 4);
        this.setState({ upComingMovies: firstSoonMovies })
      })
      .catch(console.log)
  }


  render() {
    const urlImg = 'https://image.tmdb.org/t/p/w500/'

    return (
      <div className="main-container upcoming-container">
        <h3>Próximamente</h3>
        <ul className="upcoming-list">
          {this.state.upComingMovies.map(movie =>
            <li className="next-movies" key={movie.id}>
              <span href="./" style={{ backgroundImage: "url(" + urlImg + movie.backdrop_path + ")" }}>
                <div className="overlay-movie">
                  <ul className="upper-btns">
                    <button><AddList /></button>
                    <button><img src={require('../images/like.png')} alt="Like" /></button>
                  </ul>
                  <div className="play-overlay">
                    <div className="play-movie">
                      <button><PlayCircle /></button>
                    </div>
                    <h4 className="movie-title">{movie.title}</h4>
                    <p className="movie-desc">{movie.overview}</p>
                  </div>
                </div>
              </span>
              <div className="hover-arrow">
                <ArrowLarge />
              </div>

            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default UpComingMovies;