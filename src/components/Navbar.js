import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/jquery/dist/jquery.min.js';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id={"navbar"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav col-lg-1 col-md-1">
                    <div className="col-12">
                        <div className="row">
                            <li className="nav-item col-sm-12 col-9">
                                <div className="row">
                                    Saurin Shah
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>
                <div className="collapse navbar-collapse col-sm-11 col-12 p-0" id="navbarNavDropdown">
                    <ul className="navbar-nav flex-column flex-sm-row flex-wrap">
                        <li className="nav-item d-flex active" onClick={() => this.scrollToPage("about")}>
                            <b className="mt-2">a.</b>
                            <span className="nav-link">About<span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("exp")}>
                            <b className="mt-2 ml-2">b.</b>
                            <span className="nav-link">Experience</span>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("project")}>
                            <b className="mt-2 ml-2">c.</b>
                            <span className="nav-link">Projects</span>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("contact")}>
                            <b className="mt-2 ml-2">d.</b>
                            <span className="nav-link">Contact</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    scrollToPage(page_location) {
        var el = document.getElementById(page_location);
        el.scrollIntoView({block: 'end', behavior: 'smooth'});

    }
}

export default Navbar;