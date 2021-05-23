import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './css/App.scss';
import './css/Resume.scss';
import { content } from './assets/content';
import { useEffect } from 'react';

const ResumePage = () => {
    const [width, setWidth] = useState(window.innerWidth);
    document.title = 'Resume | Clarence Feng';

    const updateDimensions = () => {
        window.innerWidth >= 1200 ? setWidth(1140) : setWidth(window.innerWidth);
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        }
    }, []);

    return (
        <div className="App">
            <Header selected={4}/>
            <div className="container-xl body-container">
                <a className="resume-download" href={require(`${"./assets/Clarence-Feng-CV-May-2021.pdf"}`)} download>
                    <Document 
                        className="resume"
                        loading={content.resume.loading}
                        file={require(`${"./assets/Clarence-Feng-CV-May-2021.pdf"}`)} 
                        onLoadError={console.error}>
                        <Page 
                            pageNumber={1} 
                            loading={content.resume.loading}
                            width={width}/>
                    </Document>
                </a>
            </div>
            <div className="container body-container resume-help primary-text">
                <a href={require(`${"./assets/Clarence-Feng-CV-May-2021.pdf"}`)} download>
                    {content.resume.download}
                </a>
            </div>
            <Footer/>
        </div>
    );
}

export default ResumePage;