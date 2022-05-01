import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeState, setActiveState] = useState(null);

  const onTitleClicked = (index) => {
    setActiveState(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeState ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
