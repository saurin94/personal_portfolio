import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        console.log("Experience -> ", props.experiences);
    }

    selectExperience = (index) => {
        console.log(index);
        this.props.onSelectExperience(index)

    };


    render() {
        return (
            <div className="content col-8 offset-2 text-left mt-sm-2 mt-0" id={"exp"}>
                <div className="row">
                    <h1 className={"text-right"}>b. Experience</h1>
                    <br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <ul>
                                <li onClick={() => this.props.onSelectExperience(0)}>StubHub</li>
                                <li onClick={() => this.props.onSelectExperience(1)}>Teaching Assistant (A.I)</li>
                                <li onClick={() => this.props.onSelectExperience(2)}>Co-Founder / C.T.O</li>
                                <li onClick={() => this.props.onSelectExperience(3)}>Programmer and Artist</li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <div>
                                {this.props.experiences[this.props.selectedExp].work.map(function (work) {
                                    return <li>{work}</li>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;