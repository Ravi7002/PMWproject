import React from 'react';
import './WorksCited.css';

const WorksCited = () => {
    return (
        <article className="works-cited">
            <header className="works-cited-header container">
                <h1 className="works-cited-title">Works Cited</h1>
                <p className="works-cited-subtitle">
                    References and sources for "Why Indonesia Needs More Than Free Lunch to Build Stronger Human Resources"
                </p>
            </header>

            <div className="works-cited-content container">
                <div className="citation-section">
                    <h2>Primary Sources</h2>

                    <div className="citation">
                        <p className="citation-text">
                            <span className="citation-author">CNBC Indonesia.</span>
                            <span className="citation-title"> "Makan Bergizi Gratis: Program Flagship untuk Meningkatkan Kualitas SDM Indonesia." </span>
                            <span className="citation-publication">CNBC Indonesia,</span>
                            <span className="citation-date"> 2024.</span>
                            <span className="citation-url"> Web.</span>
                        </p>
                    </div>

                    <div className="citation">
                        <p className="citation-text">
                            <span className="citation-author">The Jakarta Post.</span>
                            <span className="citation-title"> "Free Nutritious Meals Program: Implementation Challenges and Opportunities." </span>
                            <span className="citation-publication">The Jakarta Post,</span>
                            <span className="citation-date"> 2024.</span>
                            <span className="citation-url"> Web.</span>
                        </p>
                    </div>

                    <div className="citation">
                        <p className="citation-text">
                            <span className="citation-author">The Conversation.</span>
                            <span className="citation-title"> "Beyond Free Meals: What Indonesia Really Needs for Human Capital Development." </span>
                            <span className="citation-publication">The Conversation,</span>
                            <span className="citation-date"> 2024.</span>
                            <span className="citation-url"> Web.</span>
                        </p>
                    </div>
                </div>

                <div className="citation-section">
                    <h2>Academic Sources</h2>

                    <div className="citation">
                        <p className="citation-text">
                            <span className="citation-title">Health: Student Edition.</span>
                            <span className="citation-publication"> Prentice Hall / Pearson,</span>
                            <span className="citation-date"> 2014.</span>
                        </p>
                    </div>
                </div>

                <div className="special-thanks-section">
                    <h2>Special Thanks</h2>
                    <div className="teacher-thanks">
                        <div className="teacher-image-container">
                            <img src="/ms_avie.png" alt="Ms. Avie" className="teacher-image" />
                        </div>
                        <div className="teacher-info">
                            <p className="teacher-message">
                                Special thanks to our teacher: <strong>Ms. Avie</strong>
                            </p>
                            <p className="teacher-description">
                                For guiding us through the Physical-Mental Wellbeing course and inspiring this holistic perspective on health and human development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="back-button-container">
                    <a href="/" className="back-button">
                        ← Back to Article
                    </a>
                </div>
            </div>
        </article>
    );
};

export default WorksCited;
