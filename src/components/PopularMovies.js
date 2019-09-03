import React from 'react';
import { ReactComponent as AddList } from '../images/add-list.svg'
import { ReactComponent as PlayCircle } from '../images/play-circle.svg'
import { ReactComponent as ArrowLarge } from '../images/arrow-large.svg'

class PopularMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      popular: []
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      .then(res => res.json())
      .then((data) => {
        const firstPopMovies = data.results.slice(0, 4);
        this.setState({ popular: firstPopMovies })
      })
      .catch(console.log)
  }

  render() {
    const urlImg = 'https://image.tmdb.org/t/p/original/'

    return (
      <div className="main-container upcoming-container reset-container">
        <h3 className="uppercase">Populares en liteflix</h3>
        <ul className="upcoming-list">
          {this.state.popular.map(movie =>
            <li className="next-movies popular-movies" key={movie.id}>
              <span href="./" style={{ backgroundImage: "url(" + urlImg + movie.poster_path + ")" }}>
                <div className="overlay-movie">
                  <div className="play-overlay">
                    <div className="play-movie">
                      <button><PlayCircle /></button>
                    </div>
                    <h4 className="movie-title">{movie.title}</h4>
                    <p className="movie-desc">{movie.overview}</p>
                  </div>
                  <div className="to-right">
                    <ul className="upper-btns">
                      <button><img src={require('../images/like.png')} alt="Like" /></button>
                    </ul>
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

export default PopularMovies;