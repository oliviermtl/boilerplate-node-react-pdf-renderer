const React = require("react");

const {
  Document,
  Page,
  Text
} = require("@react-pdf/renderer");

function MyDocument() {
  return /*#__PURE__*/React.createElement(Document, null, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Text, null, "React-pdf")));
}

module.exports = {
  MyDocument
};