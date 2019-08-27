import React from 'react';
import Navigation from './Navigation'

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

        function sortDates(a, b)
        {
            return a.getTime() - b.getTime();
        }
        var sorted = arrOfDates.sort(sortDates);
        var maxDate = sorted[sorted.length-1];

        const formatMaxDate = Date.parse(maxDate)

        data.results.forEach((elem, index) => {

           const parsed_release = Date.parse(elem.release_date);

          if( parsed_release === formatMaxDate){
            this.setState({ lastMovie: data.results[index]})
          }
        });
        console.log('state', this.state.lastMovie)
      })
      .catch(console.log)
  }

  render() {


    return (
      <div className="hero">
        <div className="main-container">
          <Navigation />
        </div>
      </div>
    )
  }

}


export default FeaturedMovie;