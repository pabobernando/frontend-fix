import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PdfGame from '../components/game/pdfGame';
import classes from './pdfFile.module.css';

function PdfFile() {
  return (
    <div>
      <PdfGame />
      <PDFDownloadLink document={<PdfGame />} fileName="FORM">
        {({ loading }) => (loading ? <button className={classes.button}>Loading Document...</button> : <button className={classes.button}>Download</button>)}
      </PDFDownloadLink>
    </div>
  );
}

export default PdfFile;
