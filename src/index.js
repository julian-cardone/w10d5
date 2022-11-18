import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";
import GalleryNavigation from './components/GalleryNavigation';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Route path = {`/gallery/${gallery.id}`}>

//   </Route>
// )

function Root(){
  return (
    <BrowserRouter>
    <App />
    </BrowserRouter>
  );
}



