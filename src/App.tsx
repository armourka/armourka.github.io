import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { SampleProjects } from './pages/SampleProjects'
import { Contact } from './pages/Contact'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<SampleProjects />} />
            {/* <Route path="/contact" element={<Contact/>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
