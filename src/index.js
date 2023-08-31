import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const root = createRoot(document.getElementById('root')); // Create a root instance
root.render(<App />);
