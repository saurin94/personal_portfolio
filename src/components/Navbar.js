import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <span className="navbar-brand">Saurin Shah</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <b className="mt-2">a.</b>
                        <li className="nav-item active test1" onClick={() => this.scrollToPage("about")} to="test1" spy={true} smooth={true} duration={500}>
                            <span className="nav-link">About<span className="sr-only">(current)</span></span>
                        </li>
                        <b className="mt-2 ml-2">b.</b>
                        <li className="nav-item" onClick={() => this.scrollToPage("exp")}>
                            <span className="nav-link">Experience</span>
                        </li>
                        <b className="mt-2 ml-2">c.</b>
                        <li className="nav-item" onClick={() => this.scrollToPage("project")}>
                            <span className="nav-link">Projects</span>
                        </li>
                        <b className="mt-2 ml-2">d.</b>
                        <li className="nav-item" onClick={() => this.scrollToPage("contact")}>
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