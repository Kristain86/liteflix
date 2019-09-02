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
      <React.Fragment>
        <div className="nav-container">
          <nav className="main-nav">
            <ul>
              <li><a href="./" className="logo-liteflix"><LiteflixLogo /></a></li>
              <li><a href="./"><b>Inicio</b></a></li>
              <li><a href="./">Series</a></li>
              <li><a href="./">Películas</a></li>
              <li><a href="./">Agregados recientemente</a></li>
              <li><a href="./">Mi lista</a></li>
              <li><a href="./" className="add-movie-btn"><PlusIcon /><em>Agregar película</em></a></li>
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

        <div className="mobile-nav">
          <div id="menuToggle">
            <input type="checkbox" />
            <LiteflixLogo className="logo-xs" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li className="user-xs"><a href="./" ><User01 /><label className="user-name">Cristian Sagula</label></a></li>
              <li>
                <ul className="setting-xs">
                  <li><a href="./">Cambiar usuario</a></li>
                  <li><a href="./">Configuración</a></li>
                  <li><a href="./">Ayuda</a></li>
                </ul>
              </li>
              <li>
                <ul id="main-nav" className="main-xs-nav">
                  <li><a href="./" className="notifications" ><BellIcon  /><label>Novedades</label></a></li>
                  <li><a href="./" ><label>Series</label></a></li>
                  <li><a href="./" ><label>Películas</label></a></li>
                  <li><a href="./" ><label>Mi lista</label></a></li>
                  <li><a href="./" ><label>Niños</label></a></li>
                </ul>
              </li>
              <li id="add-movie-xs"><a href="./" className="add-movie-btn hovered"><PlusIcon /><em>Agregar película</em></a></li>
              <li ><a href="./" ><label><b>Log out</b></label></a></li>
            </ul>
          </div>

        </div>
      </React.Fragment>
    )
  }

}

export default Navigation;