import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class LeftSideBar extends Component {
    render() {
        return (

            <div className="left-sidebar col-lg-1 col-md-1 d-none d-md-block">
                <div className="row mt-5"></div>
                <div className="row mt-5"></div>
                <div className="item-1 mt-1">
                    <a href={"https://www.linkedin.com/in/saurin94/"} className={"side-icons"}><i
                        className="fab fa-linkedin fa-2x"></i></a>
                </div>
                <div className="item-1 mt-5">
                    <a href={"https://www.facebook.com/sau94"} className={"side-icons"}>
                        <i className="fab fa-facebook-square fa-2x"></i>
                    </a>
                </div>
                <div className="item-1 mt-5">
                    <a href={"https://github.com/saurin94"} className={"side-icons"}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <div className="item-1 mt-5">
                    <a href={"https://www.instagram.com/saurin94/"} className={"side-icons"}>
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default LeftSideBar;