import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { StateProvider } from "./component/StateProvider";
import reducer, { initialState } from "./component/Reducer";
ReactDOM.render(
  <BrowserRouter>
   <StateProvider initialState={initialState} reducer={reducer}>
     <App />
     </StateProvider>
  </BrowserRouter>
,
  document.getElementById('root')
);

