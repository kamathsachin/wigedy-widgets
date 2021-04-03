import React from "react";

const Accordian = ({ items }) => {
  const renderedList = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className="contect active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedList}</div>;
};

export default Accordian;
