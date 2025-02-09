import { Box } from "@mui/material";
import NavBar from "../NavBar";
import Footer from "../Home/Footer";
import Header from "./Header";
import Dependent from "./DependentDropdowns";
import ImageSection from "./ImageSection";

const Notes = () => {
    return (
        <Box>
            <NavBar />
            <Box>
                <Header topic="Notes"/>
                <Box>
                    <Dependent />
                </Box>
                <Box display="flex" gap="20px" mt="20px">
                    {/*Notes will be here.*/}
                </Box>
                <ImageSection />
            </Box>
            <Footer />
        </Box>
    );
};

export default Notes;