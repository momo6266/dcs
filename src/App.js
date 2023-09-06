import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import VideoDisplay from './VideoDisplay';
import QuickSight from './QuickSight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <h1>Smart Baby Cot</h1>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/quicksight" element={<QuickSight />} />
            <Route path="/" element={<VideoDisplay />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
