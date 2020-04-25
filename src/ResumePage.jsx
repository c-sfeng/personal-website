import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resume from './assets/Clarence-Feng-CV-April-2020.pdf';
import './css/App.scss';
import './css/Resume.scss';

class ResumePage extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        }
    }

    updateDimensions() {
        if (window.innerWidth >= 1200) {
            this.setState({
                width: 1140
            });    
        } else {
            this.setState({
                width: window.innerWidth
            });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    handleClick() {

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header selected={2}/>
                </div>
                <div className="container-xl body-container" onClick={this.handleClick}>
                    <a className="resume-download" href={resume} download>
                        <Document 
                            className="resume"
                            loading="Loading resume..."
                            file={resume} 
                            onLoadError={console.error}>
                            <Page 
                                pageNumber={1} 
                                loading="Loading resume..."
                                width={this.state.width}/>
                        </Document>
                    </a>
                </div>
                <div className="container body-container resume-help primary-text">
                    Click on the resume to download.
                </div>
                <div className="container end-container">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ResumePage;