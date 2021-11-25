import React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {Helmet} from "react-helmet-async";

// styles
import styles from "./view.module.scss";

// interface
interface ITemplateView extends RouteComponentProps<any> {
    viewTitle: string;
    appVersion: string;
}

const TemplateView: React.FC<ITemplateView> = ({
    children,
    viewTitle,
    appVersion
  }) => {

  return (
    <>
      <Helmet>
        <title>{viewTitle} {appVersion}</title>
      </Helmet>
      {
        <div className={styles.app}>
          {children}
        </div>
      }
    </>
  );
};

export default withRouter(TemplateView);