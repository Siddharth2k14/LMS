import {Box} from "@mui/material";
import NavBar from "../NavBar.jsx";
import Header from "../Notes/Header.jsx";
import Dependent from "../Notes/DependentDropdowns.jsx";
import ImageSection from "../Notes/ImageSection.jsx";
import Footer from "../Home/Footer.jsx";
import VideoList from "./VideoList.jsx";
import FileUploadSection from "../Notes/FileUploadSection.jsx";
// import VideoForm from "./VideoForm.jsx";

const Videos = () => {

    return (
     <Box>
         <NavBar />
         <Box>
             <Header topic="Videos"/>
             <Box>
                 <Dependent />
             </Box>
             {/* <Box>
                <VideoForm />
             </Box> */}
             <ImageSection />
         </Box>
         <Footer />
     </Box>
    )
};
export default Videos;