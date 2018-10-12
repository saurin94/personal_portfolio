import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="content col-lg-8 col-12 offset-lg-2 text-left" id={"about"}>
                <div className="row">

                    <h1 className={"pageHeading ml-lg-0 ml-md-0 ml-2"}>About</h1>

                    <div className="col-12 ml-1 mt-lg-5 mt-md-3 mt-sm-2">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                Learning and mastering the art of creating high-quality data driven softwares.
                                Most excited about deploying these skills to solve real problems and push the boundary
                                of
                                what
                                is possible.
                                <p>
                                    <br/>
                                    Currently a Computer Science Graduate Student at Northeastern University. <br/>
                                    Graduation date: <b>May 2019</b><br/>
                                    Subjects taken at Northeastern :<br/>
                                    01. Programming Desing Principles |
                                    02. Foundations of Artificial Intelligence |
                                    03. Information Retrieval |
                                    04. Managing Software Development |
                                    05. Algorithms |
                                    06. Web Development |
                                    07. Database Management Systems
                                </p>
                                <div>
                                    Some tech I am experienced with :
                                    <div className="row">
                                        <ul className="col-lg-4 col-4">
                                            <li>Python</li>
                                            <li>Java</li>
                                            <li>Scala</li>
                                            <li>Spark</li>
                                            <li>Hadoop</li>
                                        </ul>
                                        <ul className="col-lg-4 col-4">
                                            <li>Spring Boot</li>
                                            <li>Javascript</li>
                                            <li>ReactJS</li>
                                            <li>Redux</li>
                                            <li>MongoDB</li>
                                        </ul>
                                        <ul className="col-lg-4 col-4">
                                            <li>Node.js</li>
                                            <li>Elasticsearch</li>
                                            <li>MySQL</li>
                                            <li>AWS</li>
                                            <li>Hive</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 text-lg-right">
                                <img width={'120%'} height={"auto"} className={'saurin-img d-none d-lg-block'}
                                     src={"https://scontent.fbed1-2.fna.fbcdn.net/v/t31.0-8/10457382_10203614424537849_5742836755429401387_o.jpg?_nc_cat=110&oh=b6ef0468e9e6e40a619522087b1904b0&oe=5C152842"}
                                     alt={"saurin shah img"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;