import React from 'react';
import { ReactComponent as LiteflixLogo } from '../images/liteflix.svg';
import { ReactComponent as PlusIcon } from '../images/plus.svg';
import { ReactComponent as BellIcon } from '../images/bell.svg';
import { ReactComponent as User01 } from '../images/user-01.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';


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
            <li><a href="./" className="logo-liteflix"><LiteflixLogo /></a></li>
            <li><a href="./"><b>Inicio</b></a></li>
            <li><a href="./">Series</a></li>
            <li><a href="./">Películas</a></li>
            <li><a href="./">Agregados recientemente</a></li>
            <li><a href="./">Mi lista</a></li>
            <li><a href="./" className="add-movie-btn"><PlusIcon /><span>Agregar película</span></a></li>
          </ul>
        </nav>

        <nav className="sideNav">
          <ul>
            <li><a href="./">Niños</a></li>
            <li><a href="./" className="notifications"><BellIcon /></a></li>
            <li>
              <span className="accout"><User01 /><Arrow />
              <div className="account-panel">
                  <ul>
                    <li><a href="./"><User01 /><span>Cristian Sagula</span></a></li>
                    <li><a href="./"><User01 /><span>Indiana Jones</span></a></li>
                    <li><a href="./"><User01 /><span>Walter White</span></a></li>
                  </ul>
                  <ul className="setting-list">
                    <li><a href="./">Configuración</a></li>
                    <li><a href="./">Ayuda</a></li>
                    <li><a href="./">Log out</a></li>
                  </ul>
                  </div>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default Navigation;