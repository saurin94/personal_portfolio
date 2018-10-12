import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Description extends Component {
    render() {
        return (
            <div className="content col-lg-8 col-12 offset-lg-2 text-left pt-lg-5" id={"description"}>
                <div className={"container w-100 mt-2"}>
                    <div className={"col-12"}>
                        Hi, I am<h1 className={"myName"}>Saurin Shah.</h1>
                    </div>
                    <div className="col-12">
                        <h1 className={"myDesc"}>I am a Software Developer</h1>
                    </div>
                    <div className={"col-12"}>
                        <p>
                            Currently a Graduate Student at Northeastern University. <br/>
                            Pursuing Masters in Computer Science. <br/>
                        </p>
                    </div>
                    <div className={"col-12"}>
                        <form action="mailto:saurin.shah94@gmail.com" method="post" encType="text/plain">
                            <button type="submit" className="btn btn-dark btn-lg">Want to connect?</button>
                        </form>
                    </div>

                    <div className={"col-12 mt-5"}>
                        <p>
                            <i>This page is developed using React.js without any libraries or templates. <u>It is under construction. </u>
                                This page has weekly updates. Please contact for any questions.</i>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Description;