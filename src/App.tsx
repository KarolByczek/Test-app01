import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import {FullName} from "./components/FullName";
import {Birthday} from "./components/Birthday";
import {PresentSuggestion} from "./components/PresentSuggestion";
import {Card} from "./components/Card";
import {Wishes} from "./components/Wishes";
import {Avatar} from "./components/Avatar";


function App() {
  return (
    <div className="page">
      <Card>
        <Avatar />
        <div className="content">
          <FullName />
          <Birthday />
          <PresentSuggestion />
          <Wishes />
        </div>
      </Card>
    </div>
  );
};

export default App;
