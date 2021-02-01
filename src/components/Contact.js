import React, { Component } from "react";
import Title from "./Title"
import "./Contact.css";
import FormNew from "./FormNew"

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
               <div className="contact-info">
               <Title text="Dimitar Pavlov" />
                    <img 
                        src="https://www.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
                        alt="avatar"
                        className="image" 
                    />
                    <h4 className="text">While you are coding your life <br />
                    Fighting will always be the default case...</h4>
                    
                </div>
                <div>
                    <FormNew />
                </div>
            </div>
        )
    }
}

export default Contact 



    