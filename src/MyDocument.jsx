const React = require("react");
const { Document, Page, Text } = require("@react-pdf/renderer");

function MyDocument() {
  return (
    <Document>
      <Page>
        <Text>React-pdf</Text>
      </Page>
    </Document>
  );
}

module.exports = { MyDocument };
