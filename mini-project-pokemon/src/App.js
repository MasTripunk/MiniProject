import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./menuview/Home";
import Pokedex from "./menuview/Pokedex";
import Owned from "./menuview/Owned";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Container className="p-3">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><NavLink to="/pokedex">Pokedex List</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><NavLink to="/owned">Owned/Catched List</NavLink></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/pokedex" component={Pokedex}/>
                        <Route path="/owned" component={Owned}/>
                    </div>
                </Container>
            </HashRouter>
        );
    }
}

export default App;
