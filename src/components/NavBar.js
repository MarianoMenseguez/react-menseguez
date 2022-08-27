import "../App.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="historia.html">
                  Historia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="instrumentos.html">
                  La Musica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="productos.html">
                  Productos
                </a>
                <CartWidget />
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
