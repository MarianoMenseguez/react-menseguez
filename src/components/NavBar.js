import { Link } from "react-router-dom";
import "../App.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid">
        <Link to="/"> 
          <em>
           <a className="navbar-brand" href="#">
              1968
            </a>
          </em>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </Link> 
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to="/"> 
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page">
                  Inicio
                </a>
              </li>
              </Link> 
              <li className="nav-item">
                <a className="nav-link active" href="productos.html">
                  Productos
                </a>
                <CartWidget />
                <Link to="/category/1">
                <li className="nav-item">
                  <a className="nav-link active" >
                    Musculosas
                  </a>
                </li>
                </Link>
                <Link to="/category/2">
                <li className="nav-item">
                  <a className="nav-link active" >
                    Shores
                  </a>
                </li>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="contacto.html">
                  Contacto
                </a>
              </li>
            </ul>
            <div>
              <a className="nav-link active">LOGIN</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
