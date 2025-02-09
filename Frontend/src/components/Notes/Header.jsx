import { Box, Typography } from "@mui/material";

const Header = ({ topic = "Material" }) => {
    return (
        <Box
            component="header"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Organize Your Study {topic}
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                sx={{
                    padding: 2,
                    height: { xs: "auto", sm: "70px" },
                    width: { xs: "100%", sm: "700px" },
                }}
            >
                <Typography>
                    Our Learning Management System allows you to efficiently store and manage your study {topic}. Keep all your important information in one place and access it anytime.
                </Typography>
            </Box>
        </Box>
    );
};
export default Header;
