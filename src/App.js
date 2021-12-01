import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Global, Home, Indonesia, Provinsi, About } from "./Pages";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="ContainerApp">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={{
                  color: "#ff0000",
                  float: "left",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 14,
                }}
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/global"
                style={{
                  color: "#ffff00",
                  float: "left",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 14,
                }}
                activeStyle={{ fontWeight: "bold", backgroundColor: "#ffffff" }}
              >
                {" "}
                Global{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/indonesia"
                style={{
                  color: "#00ff00",
                  float: "left",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 14,
                }}
                activeStyle={{ fontWeight: "bold", backgroundColor: "#ffffff" }}
              >
                {" "}
                Indonesia{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/provinsi"
                style={{
                  color: "#0000ff",
                  float: "left",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 14,
                }}
                activeStyle={{ fontWeight: "bold", backgroundColor: "#ffffff" }}
              >
                {" "}
                Provinsi{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={{
                  color: "#bf00ff",
                  float: "left",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: 14,
                }}
                activeStyle={{ fontWeight: "bold", backgroundColor: "#ffffff" }}
              >
                {" "}
                About{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/global">
            {" "}
            <Global />{" "}
          </Route>
          <Route path="/indonesia">
            {" "}
            <Indonesia />{" "}
          </Route>
          <Route path="/provinsi">
            {" "}
            <Provinsi />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/">
            {" "}
            <Home />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
