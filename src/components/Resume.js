import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Resume.css";
import Education from "./Education";
import Experince from "./Experience";
import Skills from "./Skills";
import Title from "./Title"

class Resume extends Component {
    render() {
        return(
            <div className="resume-body">
                <Grid>
                    <Cell col={4}>
                        <div className="left-side">
                            <img
                                src="https://www.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
                                alt="avatar"
                                className="avatar" 
                            />
                        </div>

                        <Title text="Dimitar Pavlov" />
                        <hr />
                        <h5>Address</h5>
                        <p>b-dul "Regina Maria" 47, Bucharest, Romania</p>
                        <h5>Email</h5>
                        <p>dimitar_animation@yahoo.com</p>
                        <h5>Mobile Phones</h5>
                        <p>+40724988936</p>
                        <p>+359892208059</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Wild Code School Bucahrest/Milan Campus"
                            schoolDescription="Front-End Developer"
                        />

                        <Education 
                            startYear={2005}
                            endYear={2005}
                            schoolName="Red Rock Community College Denver/Colorado"
                            schoolDescription="Motion Graphic Animation"
                        />

                        <Education 
                            startYear={2000}
                            endYear={2005}
                            schoolName="Foreign Languages Gymnasium Plovdiv"
                            schoolDescription="German and English enhanced learning school"
                        />

                        <h2>Experience</h2>

                        <Experince 
                             
                        />

                        <h2>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            propgress={70}
                            buffer={70}
                        />
                         <Skills 
                            skill="JavaScript"
                            propgress={70}
                            buffer={70}
                        />
                         <Skills 
                            skill="React"
                            propgress={50}
                            buffer={50}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume