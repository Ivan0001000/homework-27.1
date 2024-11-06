import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={theme}>
            <Router>
                <Header toggleTheme={toggleTheme} />
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<h2>Page Not Found</h2>} />
                    </Routes>
                </ErrorBoundary>
            </Router>
        </div>
    );
}

export default App;
    