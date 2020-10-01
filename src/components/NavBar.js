import React from "react";
import Home from "./Home";
import Resume from "./Resume";
import Projects  from "./Projects";
import About from "./About";
import Contact from "./Contact"
import { Switch, Route } from "react-router-dom"

const NavBar = () => (
   <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/resume" component={Resume} />
       <Route path="/projects" component={Projects} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} /> 
   </Switch>
)

export default NavBar