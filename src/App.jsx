import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import WorksCited from './components/WorksCited';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/works-cited" element={<WorksCited />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
