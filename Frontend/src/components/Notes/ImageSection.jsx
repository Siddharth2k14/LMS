import { Box } from "@mui/material";

const ImageSection = () => {
    return (
        <Box mt="20px" ml="20px" mr="20px">
            <img
                src="Frontend/src/assets/OIP.jpeg"
                height="100%"
                width="100%"
                style={{ borderRadius: "12px", border: "2px solid black" }}
                alt="Decoration"
            />
        </Box>
    );
};

export default ImageSection;