import React from "react";
import Accordian from "./components/Accordian";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end Javascript Framework",
  },
  {
    title: "Why use React?",
    content: "React is a JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <br />
      <Accordian items={items} />
    </div>
  );
};

export default App;