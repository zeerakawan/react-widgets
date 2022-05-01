import React, { useState } from "react";

import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

// FOR ACCORDION COMPONENT
const items = [
  {
    title: "What is React?",
    content: "React is a front-end Javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS Librarry among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

// FOR DROPDOWN COMPONENT
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
    label: "A Shade of Blue",
    value: "blue",
  },
];

// FOR TRANSLATE COMPONENT
const optionsTranslate = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select the color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate options={optionsTranslate} />
      </Route>
    </div>
  );
};

export default App;
