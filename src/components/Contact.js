import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Contact extends Component {
    render() {
        return (
            <div className="content col-lg-8 col-12 offset-lg-2 text-right" id={"contact"}>
                <div className="row">
                    <h1 className={"col-12 myDesc"}>Contact</h1>

                    <div className="mt-5 pt-5 text-center col-12">
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <div className={"mt-3 text-center col-12"}>
                        <p>Looking for winter-intership (Spring 2019/Jan-May 2019) &<br/>
                        Finding Full time opportunities starting from May 2019 <br/>
                            in the field of <b>Computer Science</b></p>
                    </div>
                    <div className={"mt-5 text-center col-12"}>
                        <form action="mailto:saurin.shah94@gmail.com" method="post" encType="text/plain">
                            <button type="submit" className="btn btn-dark btn-lg">Say Hello!</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;