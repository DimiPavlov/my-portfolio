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
                "url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover"}} >HTML/CSS/JS</CardTitle>
                <CardText style={{ textAlign: "center" }}>
                    HomeExperts
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
"url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover"}} >HTML/CSS/JS </CardTitle>
<CardText style={{ textAlign: "center" }}>
    Bankist App
</CardText>
<CardActions border>
 <Button colored href="https://github.com/DimiPavlov/starter" target="_blank">GitHub</Button>
    <Button colored href="https://bankist-dimi.netlify.app" target="_blank">DEMO</Button>
</CardActions>
<CardMenu style={{color:"#fff"}}>
    <IconButton name="share" />
</CardMenu>
</Card>
    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "#fff",  height: "176px", background: 
    "url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover"}} >HTML/CSS/JS</CardTitle>
    <CardText style={{ textAlign: "center" }}>
        Dice Game
    </CardText>
    <CardActions border >
     <Button colored href="https://github.com/DimiPavlov/Dice" target="_blank">GitHub</Button>
       <Button colored href="https://dice-dimi.netlify.app" target="_blank">DEMO</Button>
    </CardActions>
    <CardMenu style={{color:"#fff"}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
        )
    } else {
        return(
            <div className="react">
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "#fff",  height: "176px", background: 
    "url(https://sld.gs/wp-content/uploads/2018/04/react-background.jpg) center / cover"}} >REACT</CardTitle>
    <CardText style={{textAlign: "center"}}>
        Nokia Feature Phones Hackathon
    </CardText>
    <CardActions border >
        <Button colored href="https://github.com/nokia-hackathon-group4/new-nokia-winner" >GitHub</Button>
       
    </CardActions>
    <CardMenu style={{color:"#fff"}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

<Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "#fff",  height: "176px", background: 
    "url(https://sld.gs/wp-content/uploads/2018/04/react-background.jpg) center / cover"}} >REACT</CardTitle>
    <CardText style={{textAlign: "center"}}>
        CRWN-E-Commerce/In development
    </CardText>
    <CardActions border >
        {/* <Button colored href="https://github.com/kadrijj/Experts" >GitHub</Button>
        <Button colored href="https://kadrijj.github.io/Experts/index.html" target="_blank">DEMO</Button> */}
    </CardActions>
    <CardMenu style={{color:"#fff"}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

<Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "#fff",  height: "176px", background: 
    "url(https://sld.gs/wp-content/uploads/2018/04/react-background.jpg) center / cover"}} >REACT</CardTitle>
    <CardText style={{textAlign: "center"}}>
        uDemy Movie Project/In development
    </CardText>
    <CardActions border >
        {/* <Button colored href="https://github.com/kadrijj/Experts" >GitHub</Button>
        <Button colored href="https://kadrijj.github.io/Experts/index.html" target="_blank">DEMO</Button> */}
    </CardActions>
    <CardMenu style={{color:"#fff"}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
            </div>
        )
    }
  }
    render() {
        return(
            <div className="category-tabs">
                <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>HTML/CSS/JS</Tab>
                    <Tab>React</Tab>
                    
                </Tabs>

                 <div className="projects-body">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    </div>
            </div>
        )
    }
}

export default Projects