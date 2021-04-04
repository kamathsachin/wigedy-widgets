import React, { useState } from "react";
// import Accordian from "./components/Accordian";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front-end Javascript Framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectionChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
