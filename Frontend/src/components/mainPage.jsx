import { Box } from "@mui/material"
import NavBar from "./NavBar"
import Hero from "./Home/Hero"
import Home from "./Home/Home"
import HomeL from "./Home/Learning Space/Home"
import Footer from "./Home/Footer"


const mainPage = () => {
    return (
        <Box>
            <NavBar />
            <Hero />
            <Home />
            <HomeL />
            <Footer />
        </Box>
    )
}

export default mainPage;