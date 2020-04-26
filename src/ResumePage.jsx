import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './css/App.scss';
import './css/Resume.scss';
import content from './assets/content.json';

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
        return (
            <div className="App">
                <div className="container">
                    <Header selected={4}/>
                </div>
                <div className="container-xl body-container" onClick={this.handleClick}>
                    <a className="resume-download" href={require(`${content.files.resume}`)} download>
                        <Document 
                            className="resume"
                            loading={content.resume.loading}
                            file={require(`${content.files.resume}`)} 
                            onLoadError={console.error}>
                            <Page 
                                pageNumber={1} 
                                loading={content.resume.loading}
                                width={this.state.width}/>
                        </Document>
                    </a>
                </div>
                <div className="container body-container resume-help primary-text">
                    <a href={require(`${content.files.resume}`)} download>
                        {content.resume.download}
                    </a>
                </div>
                <div className="container end-container">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ResumePage;