import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Employees from "../Employees/Employees";
import ContactUs from "../ContactUs/ContactUs";
import Card from "../Card/Card";
import "./MyRouter.css";

const MyRouter = () => {
  return (
    <div className="flexB">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Employees">
          <Employees />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/Card/:id">
          <Card />
        </Route>
      </Switch>
    </div>
  );
};

export default MyRouter;
