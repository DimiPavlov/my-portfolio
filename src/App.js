import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="nav-colors" title={<Link to="/">MyPortFolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer" title={<Link to="/">MyPortFolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <NavBar />
        </Content>
    </Layout>
</div>
  );
}

export default App;
