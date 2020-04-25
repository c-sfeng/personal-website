import React from 'react';
import resume from './assets/Clarence-Feng-CV-April-2020.pdf';
import './css/App.scss';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

function ResumePage() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={2}/>
            </div>
            <div className="container body-container">
                <Document file={resume} onLoadError={console.error}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
            <div className="container end-container">
                <Footer/>
            </div>
        </div>
    );
}

export default ResumePage;