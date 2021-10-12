
import React from "react";

import ReactDOM from 'react-dom';


import { BrowserRouter, } from 'react-router-dom';


import Webtask from './Webtask/src/App';



ReactDOM.render(

  <BrowserRouter> 
  
  <Webtask></Webtask>

  </BrowserRouter>,

 
 document.getElementById("root")
 
 );

