import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Contact extends Component {
    render() {
        return (
            <div className="content col-8 offset-2 text-right" id={"contact"}>
                <div className="row">
                    <h1 className={"col-12"}>d. Contact</h1>

                    <div className="mt-5 pt-5 text-center col-12">
                        <h2> GET IN TOUCH</h2>
                    </div>
                    <div className={"mt-3 text-center col-12"}>
                        Looking for winter-intership (Spring 2019/Jan-May 2019) <br/>
                        Finding Full time opportunities starting from May 2019
                    </div>
                    <div className={"mt-5 text-center col-12"}>
                        <button className="btn btn-dark btn-lg">Say Hello!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;