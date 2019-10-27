import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Screen.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SucessForm } from "./pages/forgotPassword/successForm";
import { ValidateUserForm } from "./pages/forgotPassword/validateUserForm";
import { ChangePasswordForm } from "./pages/forgotPassword/changePasswordForm";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="Screen">
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/validateUserForm"
              component={ValidateUserForm}
            />
            <Route
              exact
              path="/changePasswordForm"
              component={ChangePasswordForm}
            />
            <Route exact path="/successForm" component={SucessForm} />
            <Route exact path="/register" component={Register} />
          </div>

          <Route path="/Home" exact component={Home}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
