import React, { useState } from "react";

import Dropdown from "./Dropdown";
import ConvertText from "./ConvertText";

const Translate = ({ options }) => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "24px" }}>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <br />
      <h3 className="ui header">Output</h3>
      <ConvertText text={text} language={language} />
    </div>
  );
};

export default Translate;
