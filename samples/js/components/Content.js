import React from "react";
import Highlight from "react-highlight";
import { install, usage } from "../helpers/code";
import ContainerExample from "./examples/ContainerExample";
import TypeExample from "./examples/TypeExample";
import InsertExample from "./examples/InsertExample";
import Options from "./Options";
import { AnimationInExample, AnimationOutExample } from "./examples/AnimationExample";
import CustomContentExample from "./examples/CustomContentExample";
import UsageExample from "./examples/UsageExample";

function NPMInstall() {
  return (
    <div className="row">
      <div className="col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12 heading">
        <h2 className="text-center">Install</h2>
        <div>
          <Highlight>{install}</Highlight>
        </div>
      </div>
    </div>
  );
}

function ExampleHeading() {
  return (
    <div className="row">
      <div className="col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12 heading">
        <h2 className="text-center">Examples</h2>
        <div className="alert alert-warning alert-small">
          <i className="fa fa-info-circle"></i>
          All notifications have been set to be automatically dismissed after <code className="white-code">5000ms</code>.
          Notifications can be manually dismissed by <code className="white-code">clicking</code> or by <code className="white-code">swiping</code> on mobile devices.
        </div>
      </div>
    </div>
  );
};

const Examples = ({ addNotification }) => {
  return (
    <React.Fragment>
      <NPMInstall />
      <UsageExample addNotification={addNotification} />
      <ExampleHeading />
      <ContainerExample addNotification={addNotification} />
      <TypeExample addNotification={addNotification} />
      <CustomContentExample addNotification={addNotification} />
      <InsertExample addNotification={addNotification} />
      <AnimationInExample addNotification={addNotification} />
      <AnimationOutExample addNotification={addNotification} />
      <Options />
    </React.Fragment>
  );
};

export default function Content({ addNotification }) {
  return (
    <div className="content">
      <div className="container">
        <Examples addNotification={addNotification} />
      </div>
    </div>
  );
}