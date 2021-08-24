const React = require("react");

const { renderToFile } = require("@react-pdf/renderer");
const { MyDocument } = require("./MyDocument");

async function createPdf() {
  try {
    await renderToFile(<MyDocument />, `${__dirname}/my-doc.pdf`);
    return "pdf created in lib directory";
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { createPdf };
