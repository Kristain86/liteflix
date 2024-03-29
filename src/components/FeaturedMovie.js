import React from 'react';
import Navigation from './Navigation';
import {ReactComponent as PlayIcon } from '../images/play.svg';
import {ReactComponent as PlusIcon } from '../images/plus.svg';

class FeaturedMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      lastMovie: {


      }
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      .then(res => res.json())
      .then((data) => {
        var arrOfDates = [];
        data.results.forEach((elem) => {
          const k = elem.release_date;
          var fromDate = new Date(Date.parse(k.replace(/ /, "T")));
          arrOfDates.push(fromDate);
        });

        function sortDates(a, b) {
          return a.getTime() - b.getTime();
        }
        var sorted = arrOfDates.sort(sortDates);
        var maxDate = sorted[sorted.length - 1];

        const formatMaxDate = Date.parse(maxDate)

        data.results.forEach((elem, index) => {

          const parsed_release = Date.parse(elem.release_date);

          if (parsed_release === formatMaxDate) {
            this.setState({ lastMovie: data.results[index] })
          }
        });
      })
      .catch(console.log)
  }

  render() {
    const urlImg = 'https://image.tmdb.org/t/p/original/'

    return (
      <div className="hero" style={{backgroundImage: "url(" + urlImg + this.state.lastMovie.backdrop_path + ")"}} >
        <div className="main-container">
          <Navigation />
          <section className="featured-movie">
            <article>
              <h3 className="highlight-title uppercase">Original de <b>Liteflix</b></h3>
              <h1 className="movie-title roboto-slab">{this.state.lastMovie.title}</h1>
              <div className="cta-buttons">
                <button className="play-btn"><PlayIcon />Reproducir</button>
                <button className="list-icon"><PlusIcon /><span>Mi lista</span></button>
              </div>
              <div className="description-featured">
                <h4>Ver temporada 1</h4>
                <p>{this.state.lastMovie.overview}</p>
              </div>

            </article>
          </section>
        </div>
      </div>
    )
  }

}


export default FeaturedMovie;