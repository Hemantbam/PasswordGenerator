import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IndexPage from './Pages/IndexPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}

    <Router>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/passwordGenerate" element={<App />} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </Router>
  </>,
)
