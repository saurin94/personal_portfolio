import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

class RightSideBar extends Component {
    render() {
        return (
            <div className="right-sidebar col-1">
                <div className="item-1 vertical-bar">
                </div>
                <div className="row mt-5"></div>
                <div className="row mt-5"></div>
                <div className="row mt-5"></div>

                <div className="item-2 rightbar">
                    <a className={"mailto side-icons"} href={"mailto:saurin.shah94@gmail.com"}>saurin.shah94@gmail.com</a>
                </div>

            </div>
        );
    }
}

export default RightSideBar;