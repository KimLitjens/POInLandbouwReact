import React from "react"
import { Link } from "react-router-dom"
import logoBlack from "../img/logoBlack.png"

function Header() {

    return (
        <header>
            <div class="d-flex mb-3">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logoBlack} width="56" height="56" alt="logoPO" class="d-block d-lg-none float-left img-fluid" id="logo" />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse "
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link withBorder">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/po" class="nav-link withBorder">ProducentenOrganisatie</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/mariaLitjens" class="nav-link withBorder">Maria Litjens</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/studieenwerk" class="nav-link withBorder">Studie en werk</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/artikelenenrapporten" class="nav-link withBorder">Artikelen en rapporten</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/poinnederland" class="nav-link withBorder">PO's in Nederland</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link withBorder">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header



