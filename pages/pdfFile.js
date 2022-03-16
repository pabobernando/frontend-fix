import React from "react";
import PdfGame from "../components/game/pdfGame";

function PdfFile() {
  function handlePrint() {
    window.print();
  }
  return (
    <div>
      <PdfGame />
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default PdfFile;
