import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import VideoDisplay from './VideoDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Baby Cot</h1>
      </header>
      <main className="App-main">
        <VideoDisplay />
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Smart Baby Cot</p>
      </footer>
    </div>
  );
}

export default withAuthenticator(App); // Wrap the App component with the withAuthenticator HOC
