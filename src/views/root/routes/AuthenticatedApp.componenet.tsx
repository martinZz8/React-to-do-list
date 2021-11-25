import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// views
import ViewMain from "../../main-view/main.component";

// interfaces
interface IAuthenticatedApp {
  appVersion: string;
}

const AuthenticatedApp: React.FC<IAuthenticatedApp> = ({appVersion}) => {

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <ViewMain appVersion={appVersion} />
        )}
      />
      <Route
        exact
        path="*"
        component={() =>
          <Redirect to="/" />
        }
      />
    </Switch>
  );
};

export default AuthenticatedApp;