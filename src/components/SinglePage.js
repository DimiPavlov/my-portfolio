import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
 
const SinglePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
 
  return (
    <div>
      <Document
        file="https://www.canva.com/design/DAEJcL5ZydI/CbnRo4EibG3hD-cmE8tHaw/edit"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default SinglePage