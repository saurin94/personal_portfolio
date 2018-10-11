import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../node_modules/jquery/dist/jquery.min.js";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Description from "../components/Description";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

let experience = [
    {
        company: "StubHub",
        title: 'Graduate Software Co-op',
        location: 'Boston, MA',
        work: [
            "Contributed to feature development for Search Engine Marketing team to build aggregated data sets using Parallel Data Processing [Hadoop, Hive, Scala and Spark] for campaigns, ads and keywords",
            "Built data sets for automated keyword bidding system over 48 countries with language specific content for globalization of data",
            "Responsible for creating and deriving testing framework, test cases and scenarios from StubHub’s huge inventory catalog [Scala-Spark, ScalaTest",
            "Created a web-interface that provides functionality similar to STACKOVERFLOW for Stubhub's hackathon : \"SHAccelerator\" using MEAN STACK",
            "Responsible for creating data sets and content pertaining to keywords and ads for SITE-LINKS which are formed using Google's DoubleClick"]
    },
    {
        company: "Northeastern University",
        title: 'Teaching Assistant',
        location: 'Boston, MA',
        work: [
            "Teaching Assistant for Course CS4100 - Foundations of Artificial Intelligence\n" +
            "Contributed to the development of teaching materials for the subject “Foundations of AI”",
            "Supervised students on individual and group basis and assisted them on programming assignments based on UC Berkeley PacMan Project in Python to reinforce learning.",
            "Automated programming assignment check using Python and GitHub API"]
    },
    {
        company: "Rent N'Get",
        title: 'Chief Technology Officer',
        location: 'Mumbai, India',
        work: [
            "C.T.O and Co-Founder at Rent N' Get",
            "Identified opportunity to develop a peer to peer (P2P) renting application",
            "Assisted developers on developing Rent N’ Get Android App using Java and AWS services including EC2, Route53, S3"]
    },
    {
        company: "GameEon",
        title: 'Programmer and Artist',
        location: 'Mumbai, India',
        work: [
            "Contributed as a programmer for developing games for Android OS using “Unity” game engine (Language: JavaScript/C#) ",
            "Assisted on Web Projects to develop websites as per clients requirements using WordPress. "
        ]
    }
];

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
           experiences : experience,
           selectedexp : 0
        }
    }

    selectExp = (expSelect) => {
        this.setState({selectedexp : expSelect})
    }

    render() {
        return (
            <div className="main-page">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <LeftSideBar/>
                        <Description/>
                        <AboutMe/>
                        <Experience onSelectExperience={this.selectExp} selectedExp={this.state.selectedexp} experiences={experience}/>
                        <Projects/>
                        <Contact/>
                        <RightSideBar/>
                    </div>

                </div>
            </div>

        );
    }
}

export default MainPage;