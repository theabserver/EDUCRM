import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import App from "./src/app";


render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('root')
)
  
export default App;