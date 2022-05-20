import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="./src/components/form.js">Login</a>
                        <a className="nav-item nav-link" href="./src/components/create.js">Create Account</a>
                        <a className="nav-item nav-link active" href="#">About</a>
                    </div>
                </div>
            </nav>
        );
    }
}


{/* <article class="my-3" id="navbar">
        <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        </div>

        <div>
            <div class="bd-example">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="createaccount.html" target="_blank">Create Your ZOO
                                        Account</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="Upcoming.html" target="_blank"
                                        id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Upcoming Events
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item"
                                                href="https://zoodegranby.com/content/images/Zoo-Printemps-960x500-2-en.jpg"
                                                target="_blank">Spring Events</a></li>
                                        <li><a class="dropdown-item"
                                                href="https://assets.speakcdn.com/assets/2440/logos_rbg_color_01_summerpng.png"
                                                target="_blank">Summer Events</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item"
                                                href="https://www.chattzoo.org/assets/images/ZooBirthdayParty_Invite2018FRONT.jpg"
                                                target="_blank">Schedule Birthday Tour</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" target="_blank" tabindex="-1"
                                        aria-disabled="true">Nocture Tours</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Grrr..."
                                    aria-label="Search">
                                <button class="btn btn-outline-dark" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </article> */}