import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Experience extends Component {

    render() {
        return (
            <div className="content col-lg-8 col-12 offset-lg-2 text-left mt-sm-2 mt-0" id={"exp"}>
                <div className="row">
                    <h1 className={"text-right myDesc"}>Experience</h1>
                    <br/>
                    <div className="col-12 p-5 mt-lg-5 mt-sm-1">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <ul className={"list-group list-group-flush"}>
                                    <li className={this.props.selectedExp === 0? "list-group-item active" : "list-group-item"} onClick={() => this.props.onSelectExperience(0)}>
                                        <i className="fas fa-caret-square-right mr-1"></i>StubHub</li>
                                    <li className={this.props.selectedExp === 1? "list-group-item active" : "list-group-item"} onClick={() => this.props.onSelectExperience(1)}>
                                        <i className="fas fa-caret-square-right mr-1"></i>Teaching Assistant (A.I)</li>
                                    <li className={this.props.selectedExp === 2? "list-group-item active" : "list-group-item"} onClick={() => this.props.onSelectExperience(2)}>
                                        <i className="fas fa-caret-square-right mr-1"></i>Co-Founder / C.T.O</li>
                                    <li className={this.props.selectedExp === 3? "list-group-item active" : "list-group-item"} onClick={() => this.props.onSelectExperience(3)}>
                                        <i className="fas fa-caret-square-right mr-1"></i>Programmer and Artist</li>
                                </ul>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="row">
                                    <div className={"col-6"}>
                                        <b>{this.props.experiences[this.props.selectedExp].title}</b>
                                    </div>
                                    <div className="col-6">
                                        {this.props.experiences[this.props.selectedExp].timeline}
                                    </div>
                                </div>
                                <div>
                                     <i>{this.props.experiences[this.props.selectedExp].location}</i>
                                </div>
                                <div>
                                    {this.props.experiences[this.props.selectedExp].work.map(function (work, index) {
                                        return <li key={index}>{work}</li>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;