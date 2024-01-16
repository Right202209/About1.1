import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
// import * as serviceWorker from './serviceWorker';  
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import * as RuntimeMain from 'runtime-main.js';  

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// RuntimeMain();

// serviceWorker.register({  
//     onUpdate: (registration) => {  
//       const { updatePrompt } = window;  
//       updatePrompt().then(({ showUpdatePrompt }) => {  
//         showUpdatePrompt();  
//       });  
//     },  
//   });
