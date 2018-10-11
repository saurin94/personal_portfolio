import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

let projects =
    [
        {
            title: 'Vertical Search Engine',
            description: 'Implemented a search engine that crawls the internet searching for pages related to Donald Trump',
            tech: 'Elasticsearch Python AngularJS Calaca',
            gitLink: "#"

        },
        {
            title: 'MyTube Surfer',
            description: 'Implemented a video surfing application that can help you surf videos from YouTube',
            tech: 'React.js YouTube Data API',
            gitLink: "#"
        },
        {
            title: 'Plagiarism Detector',
            description: 'Built web application for detecting plagiarism between programs submitted by students',
            tech: ' Spring Boot Java and AngularJS',
            gitLink: "#"
        },
        {
            title: 'YouTube Comment Span Detection',
            description: 'Implemented Machine Learning technique, Naïve Bayes Classifier for detecting Spam Comments for a User specified YouTube Video',
            tech: 'Python HTML CSS NLTK YouTube API',
            gitLink: "#"
        },
        {
            title: 'Emotion Prediction - Live Capture',
            description: 'A Program to capture live image from Webcam and predict emoticons based on Emotions of the face',
            tech: 'Python Google-Cloud-Vision Flask',
            gitLink: "#"
        },
        {
            title: 'Course-Module-Topic Page',
            description: 'A responsive React application to upload, delete, edit and add courses, modules and topics with a Grid and a List view',
            tech: 'React.js',
            gitLink: "#"
        }];

class Projects extends Component {
    render() {
        return (
            <div className="content col-8 offset-2 text-left" id={"project"}>
                <div className="row">
                    <h1>c. Projects</h1>

                    <div className="row">
                        {projects.map(function (project) {
                            return (
                                <div className="col-4 mt-1 my-1">
                                    <div className="card text-white bg-dark text-center p-0 h-100">
                                        <div className={"card-header p-1"}> {project.title} </div>
                                        <div className="card-body">
                                            <div className="card-text">
                                                {project.description}
                                                <div className={"mt-4"}>
                                                    <i>{project.tech}</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href={project.gitLink}>
                                                <i className="fab fa-github fa-2x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"text-center mt-4"}>
                        <button className="btn btn-dark btn-lg">More Projects</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;