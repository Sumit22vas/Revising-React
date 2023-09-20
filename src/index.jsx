import ReactDOM from 'react-dom/client';
import App from './app/App'; // Importing Main App File from app folder

// Create rootelement in DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render imported app in DOM
root.render(<App/>);