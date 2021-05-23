import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import Header from './Header';
import Footer from './Footer';
import './css/App.scss';
import './css/Resume.scss';
import content from './assets/content';

const ResumePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  document.title = 'Resume | Clarence Feng';

  const updateDimensions = () => {
    if (window.innerWidth >= 1200) setWidth(1140);
    else setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="App">
      <Header selected={4} />
      <div className="container-xl body-container">
        {/* eslint-disable-next-line */}
        <a className="resume-download" href={require(`${'./assets/Clarence-Feng-CV-May-2021.pdf'}`)} download>
          <Document
            className="resume"
            loading={content.resume.loading}
            /* eslint-disable-next-line */
            file={require(`${'./assets/Clarence-Feng-CV-May-2021.pdf'}`)}
          >
            <Page
              pageNumber={1}
              loading={content.resume.loading}
              width={width}
            />
          </Document>
        </a>
      </div>
      <div className="container body-container resume-help primary-text">
        {/* eslint-disable-next-line */}
        <a href={require(`${'./assets/Clarence-Feng-CV-May-2021.pdf'}`)} download>
          {content.resume.download}
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
