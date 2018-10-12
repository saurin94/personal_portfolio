import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse col-sm-11 col-12 p-0' : 'collapse navbar-collapse col-sm-11 col-12 p-0 show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-md navbar-dark" id={"navbar"}>
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button"
                        data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav col-lg-1 col-md-1">
                    <div className="col-12 d-none d-lg-block">
                        <div className="row">
                            <li className="nav-item col-sm-12 col-9">
                                <div className="row">
                                    Saurin Shah
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>
                <div className={`${classOne}`} id="navbarNavDropdown">
                    <ul className="navbar-nav flex-column flex-sm-row flex-wrap">
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("about")}>
                            <div className="nav-link">About</div>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("exp")}>
                            <div className="nav-link">Experience</div>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("project")}>
                            <div className="nav-link">Projects</div>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("contact")}>
                            <div className="nav-link">Contact</div>
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