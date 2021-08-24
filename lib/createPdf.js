const React = require("react");

const {
  renderToFile
} = require("@react-pdf/renderer");

const {
  MyDocument
} = require("./MyDocument");

async function createPdf() {
  try {
    await renderToFile( /*#__PURE__*/React.createElement(MyDocument, null), `${__dirname}/my-doc.pdf`);
    return "pdf created in lib directory";
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  createPdf
};