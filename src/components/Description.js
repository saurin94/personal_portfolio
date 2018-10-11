import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="content col-8 offset-2 text-left">
                <div className="row mt-3"></div>
                <div className="row mt-3"></div>
                <div className="row mt-3"></div>
                <div className="row mt-3"></div>
                <p>
                    Hi, I am<h1 className={"myName"}>Saurin Shah</h1>
                    <h1>I am a Software Developer</h1>
                </p>
                <p>
                    Currently a Graduate Student at Northeastern University
                    pursuing Masters in Computer Science.
                </p>
                <div className="row mt-3"></div>
                <div className="row mt-3"></div>
                <div className="row mt-3"></div>
                <div className="row mt-3"></div>

                <form action="mailto:saurin.shah94@gmail.com" method="post" encType="text/plain">
                    <button type="submit" className="btn btn-dark btn-lg">Want to connect?</button>
                </form>
                
                <div className="row mt-3"></div>
            </div>
        );
    }
}

export default AboutMe;