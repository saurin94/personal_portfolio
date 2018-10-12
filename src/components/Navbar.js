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
                            <b className="mt-2 ml-2 index">a.</b>
                            <span className="nav-link">About<span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("exp")}>
                            <b className="mt-2 ml-2 index">b.</b>
                            <span className="nav-link">Experience</span>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("project")}>
                            <b className="mt-2 ml-2 index">c.</b>
                            <span className="nav-link">Projects</span>
                        </li>
                        <li className="nav-item d-flex" onClick={() => this.scrollToPage("contact")}>
                            <b className="mt-2 ml-2 index">d.</b>
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