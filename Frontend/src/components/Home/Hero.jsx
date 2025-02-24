import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import { useEffect } from "react";

const Hero = () => {

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then((response) => response.json())
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <Box>
            <Card sx={{
                backgroundColor: "#f0f8ff"
            }}>
                <CardContent>
                    <Box display="flex" gap="50px">
                        <Box>
                            <img src="Frontend\src\assets\laptop-futuristic-technology-background-generative-ai-293456791.webp" width="600px" height="500px" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" gap="70px">
                            <Typography variant="h4" fontWeight={500}>
                                Welcome to Your Ultimate Learning Hub
                            </Typography>
                            <Typography>
                                Explore a comprehensive Learning Management System designed to enhance your educational journey. Access notes, YouTube videos, and reference books all in one place, with a personalized note section to store your data securely.
                            </Typography>

                            <Box display="flex" flexDirection="row" gap="20px">
                                <Button sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: "20px"
                                }}>
                                    Get Started
                                </Button>
                                <Button sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: "20px"
                                }}>
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Hero
