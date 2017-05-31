import React from "react";
import withYoYo from "../../src";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";
import "./LayoutColumn.css";

const LayoutColumn = ({ children }) => (
  <div className="LayoutColumn">{children}</div>
);

export default withYoYo({
  label: "列",
  accepts: [Heading, Paragraph, List]
})(LayoutColumn);
