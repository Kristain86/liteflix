import React from 'react';
import { ReactComponent as LiteflixLogo } from '../images/liteflix.svg';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="nav-container">
        <nav className="main-nav">
          <ul>
            <li><a href="./"><LiteflixLogo /></a></li>
            <li><a href="./">Inicio</a></li>
            <li><a href="./">Series</a></li>
            <li><a href="./">Películas</a></li>
            <li><a href="./">Agregados recientemente</a></li>
            <li><a href="./">Mi lista</a></li>
            <li><a href="./">+</a></li>
          </ul>
        </nav>

        <nav className="sideNav">
          <ul>
            <li><a href="./">asdasd</a></li>
            <li><a href="./">asdasd</a></li>
            <li><a href="./">asdasd</a></li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default Navigation;