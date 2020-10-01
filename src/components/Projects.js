import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import "./Projects.css"

class Projects extends Component {
    constructor(props) {
        super(props) 
        this.state= { activeTab: 0 };
    }

  toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <div className="grid-cards">
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                <CardTitle style={{color: "#fff", height: "176px", background: 
                "url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover"}} >HTML/CSS/JS Projects</CardTitle>
                <CardText>
                    Projects during my WIld COde School time.
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/kadrijj/Experts" target="_blank">GitHub</Button>
                    <Button colored href="https://kadrijj.github.io/Experts/index.html" target="_blank">DEMO</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

<Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
<CardTitle style={{color: "#fff", height: "176px", background: 
"url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover"}} >HTML/CSS/JS Projects</CardTitle>
<CardText>
    Projects during my WIld COde School time.
</CardText>
<CardActions border>
    <Button colored href="https://github.com/kadrijj/Experts">GitHub</Button>
</CardActions>
<CardMenu style={{color:"#fff"}}>
    <IconButton name="share" />
</CardMenu>
</Card>
    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "#fff", height: "176px", background: 
    "url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover"}} >HTML/CSS/JS Projects</CardTitle>
    <CardText>
        Projects during my WIld COde School time.
    </CardText>
    <CardActions border >
        <Button colored href="https://github.com/kadrijj/Experts" >GitHub</Button>
    </CardActions>
    <CardMenu style={{color:"#fff"}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
        )
    } else {
        return(
            <div>
                <h1>This is App</h1>
            </div>
        )
    }
  }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>HTML/CSS/JS</Tab>
                    <Tab>React</Tab>
                    <Tab>uDemy</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects