import React from 'react';

// styles
import "../../styles/app.scss";
import AuthenticatedApp from "./routes/AuthenticatedApp.componenet";

// components


function Root() {
  const appVersion = "- To do App";

  return (
    <AuthenticatedApp appVersion={appVersion}/>
  );
}

export default Root;
