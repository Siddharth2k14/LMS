import { Box } from "@mui/material"
import Page from './components/mainPage'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Notes from "./components/Notes/notes"
import Videos from "./components/Videos/videos"
import AuthComponent from "./components/AuthComponent"

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<AuthComponent />} />
        <Route path="/register" element={<AuthComponent />} />
      </Routes>
    </Box>
  )
}

export default App