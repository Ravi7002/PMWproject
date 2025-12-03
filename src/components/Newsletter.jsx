import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container newsletter-container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Stay ahead of the curve</h2>
                    <p className="newsletter-desc">
                        Join 10,000+ designers and developers getting the latest insights on future tech delivered to their inbox.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                    <p className="newsletter-note">No spam, unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
