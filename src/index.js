import React from 'react';
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
// import './index.css';
import './construction.css';
// import App from './components/App';
import UnderConstruction from './components/UnderConstruction';


// ReactDOM.render(<UnderConstruction />, document.getElementById("root"));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <UnderConstruction />
    </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

