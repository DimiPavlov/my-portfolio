import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Home.css";
import Title from "./Title"

class Home extends Component {
    render() {
        return(
            <div className="home">
                <Grid className="home-grid">
                    <Cell col={12}> 
                    
                        <img
                            src="https://www.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Junior Front-End Developer</h1>
                            <p>HTML/CSS | JavaScript | React | Git/GitHub | Agile Methodology</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/dimitar-pavlov-1bb99494/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                                
                            </div>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home