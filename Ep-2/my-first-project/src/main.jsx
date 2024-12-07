import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {App,Hello} from './App.jsx'

import {App as First, Hello as Second} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <First />
    <Second />
  </StrictMode>,
)
