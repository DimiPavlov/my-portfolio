import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Contact.css";
import { List, ListItem, ListItemContent } from "react-mdl"

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Dimitar Pavlov</h2>
                       <img 
                            src="https://www.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
                            alt="avatar"
                            className="image" 
                        />
                        <p className="text">Junior Developer ready for a real challange</p>
                    </Cell>
                   <Cell col={6}>
                        <h2>Contact Me</h2>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    00407434545454
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                        00359892208059
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                <i className="fa fa-envelope" aria-hidden="true" />
                                    dimitar_animation@yahoo.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Contact 