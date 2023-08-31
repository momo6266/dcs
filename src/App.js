import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import VideoDisplay from './VideoDisplay';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Smart Baby Cot</h1>
      </header>
      <main className="app-main">
        <VideoDisplay />
      </main>
    </div>
  );
}

export default withAuthenticator(App); // Wrap the App component with the withAuthenticator HOC
