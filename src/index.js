import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App';
import './index.css'; // Ensure this file exists or comment it out if necessary

// Get the root element by its id
const container = document.getElementById('root');

// Ensure the container exists before rendering
if (container) {
  const root = ReactDOM.createRoot(container); // Create a root using createRoot
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Ensure there is a div with id="root" in the index.html.');
}
