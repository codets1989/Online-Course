import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Change from './Change';
import './i18n.js'


ReactDOM.render(   <React.StrictMode>
    <Suspense fallback="...loading">
        <Change/>
    </Suspense>
</React.StrictMode>, document.querySelector('.root'));
ReactDOM.render(   <React.StrictMode>
    <Suspense fallback="...loading">
        <App />
    </Suspense>
</React.StrictMode>, document.querySelector('.navbar'));




