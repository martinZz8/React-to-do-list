import React from 'react';

// styles
import "../../styles/app.scss";

// components
import AuthenticatedApp from "./routes/AuthenticatedApp.componenet";

function Root() {
  const appVersion = "- To do App";

  return (
    <AuthenticatedApp appVersion={appVersion}/>
  );
}

export default Root;
