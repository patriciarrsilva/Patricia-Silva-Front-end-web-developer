import React, { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import samplePDF from './example.pdf';
import './css/Project.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Project extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
            numPages,
            pageNumber: 1,
        });
    };

    changePage = offset => this.setState(prevState => ({
        pageNumber: prevState.pageNumber + offset,
    }));

    previousPage = () => this.changePage(-1);

    nextPage = () => this.changePage(1);

    render() {
        const { numPages, pageNumber } = this.state;

        return (
            <section className="project-section">
                <h1 className="project-section__title">Neighborhood Map</h1>

                <p className="project-section__course">Related to: Udacity Front-End Nanodegree Program</p>

                <div className="project-section__description">
                    <p>
                        This is a single page application featuring a map of my neighborhood with my favorite restaurants. The map displays all location markers by default.
                    </p>
                    <p>
                        A list-view of location names is provided which displays all locations by default. This app includes a text input field that filters the map markers and list items to locations matching the text input.
                    </p>
                    <p>
                        Clicking a location on the list or a marker displays unique information about the location inside an infoWindow.
                    </p>

                    <br />

                    <p>
                        This was the final project for the Front-End Nanodegree Program.
                    </p>
                    <p>
                        This was a huge challenge, as it took a lot of research and communication with course colleagues to complete. In the end, it was incredibly rewarding!
                    </p>
                </div>

                <p className="project-section__fork">
                    Forked from <a href="" target="_blank" rel="noopener noreferrer" className="project-section__fork-link">starter code</a>
                </p>

                <h2 className="project-section__skills-title">Skills</h2>
                <p className="project-section__skills">xyz</p>

                <p className="project-section__links project__links">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--right-margin">
                        Demo
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button">
                        Code
                    </a>
                </p>
                <p className="project__pass">Passed on <time dateTime="">August 10th, 2018</time></p>
                <p className="project__criteria">All criteria met specifications according to the rubric below</p>

                <article className="pdf-container">
                    <h2 className="pdf-container__title">Project Rubric (detailed requirements)</h2>
                    <Document
                        file={samplePDF}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <div>
                        <p>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={this.previousPage}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={this.nextPage}
                        >
                            Next
                        </button>
                    </div>
                </article>
            </section>
        );
    }
}

export default Project