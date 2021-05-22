import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './css/App.scss';
import './css/Resume.scss';
import { content } from './assets/content';

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

    render() {
        document.title = 'Resume | Clarence Feng';

        return (
            <div className="App">
                <Header selected={4}/>
                <div className="container-xl body-container" onClick={this.handleClick}>
                    <a className="resume-download" href={require(`${"./assets/Clarence-Feng-CV-May-2021.pdf"}`)} download>
                        <Document 
                            className="resume"
                            loading={content.resume.loading}
                            file={require(`${"./assets/Clarence-Feng-CV-May-2021.pdf"}`)} 
                            onLoadError={console.error}>
                            <Page 
                                pageNumber={1} 
                                loading={content.resume.loading}
                                width={this.state.width}/>
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
}

export default ResumePage;