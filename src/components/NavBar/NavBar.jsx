import Cartwidget from "../cartwidget/Cartwidget"
import logo from '../../assets/img/logoactual.png';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logo} className="logo" alt="Placeholder" />
                    <a className="navbar-brand" href="#"><h1>PISPIRETOS</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Librería</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Decoración</a>
                            </li>
                            <li className="nav-item">
                                <Cartwidget />
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar