import React from 'react';
import ReactDOM from "react-dom";

import todos from './todos';
import App from './App';


ReactDOM.render (<App initialData = {todos} title = {'React'} />, document.getElementById('root'));


