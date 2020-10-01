import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Resume.css";
import Education from "./Education";
import Experince from "./Experience";
import Skills from "./Skills"

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

                        <h2>Dimitar Pavlov</h2>
                        <h4>Programmer</h4>
                        <hr />
                        <h5>Address</h5>
                        <p>b-dul "Regina Maria" 47, Bucharest, Romania</p>
                        <h5>Email</h5>
                        <p>dimitar_animation@yahoo.com</p>
                        <h5>Telephone</h5>
                        <p>0040753828545</p>
                        <p>0054543543543</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Wild Code School"
                            schoolDescription="Front-End Developer"
                        />

                        <Education 
                            startYear={2005}
                            endYear={2005}
                            schoolName="Red Rock Community College"
                            schoolDescription="Motion Graphic Animation"
                        />

                        <Education 
                            startYear={2000}
                            endYear={2005}
                            schoolName="Foreign Languages Gymnasium"
                            schoolDescription="German and English enhanced learing school"
                        />

                        <h2>Experience</h2>

                        <Experince 
                            startYear={2020}
                            endYear={2020}
                        />

                        <h2>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            propgress={70}
                            buffer={70}
                        />
                         <Skills 
                            skill="JavaScript"
                            propgress={50}
                            buffer={50}
                        />
                         <Skills 
                            skill="React"
                            propgress={60}
                            buffer={60}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume