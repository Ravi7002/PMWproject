import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Lumina</h3>
                    <p>Exploring the future of technology and design.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Platform</h4>
                        <a href="#">Latest Posts</a>
                        <a href="#">Authors</a>
                        <a href="#">Podcasts</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="link-group">
                        <h4>Connect</h4>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; 2023 Lumina Blog. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
