import React from "react";

// templates
import TemplateView from "../../templates/view/view.template";
import TemplateContentCenter from "../../templates/content-center/content-center.template";

// components
import ToDoContent from "./to-do-content/to-do-content.component";

// interfaces
interface IViewStudentMainMenu {
  appVersion: string;
}

const ViewMain: React.FC<IViewStudentMainMenu> = ({appVersion}) => {

  return (
    <TemplateView appVersion={appVersion} viewTitle="Main">
      <TemplateContentCenter>
        <ToDoContent/>
      </TemplateContentCenter>
    </TemplateView>
  );
};

export default ViewMain;