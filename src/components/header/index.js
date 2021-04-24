import "./styles.css";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header id="top-menu">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img src={Logo} id="logo"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Premium
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#123">
                  Suporte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#123">
                  Baixar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                  |
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#123">
                  Inscrever-se
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#123">
                  Entrar
                </a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
