import React from 'react';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <main>
        <BlogPost />
      </main>
    </div>
  );
}

export default App;
