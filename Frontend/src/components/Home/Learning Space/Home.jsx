import { Box, Card, CardContent, Typography } from "@mui/material"

const Home = () => {
    return (
        <Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    marginBottom="10px"
                    color="black"
                    sx={{
                        fontWeight: "light",
                        fontStyle: "oblique",
                    }}
                >
                    Explore Our Learning Resources
                </Typography>
                <Box margin="20px 50px 50px">
                    <Typography
                        variant="body1"
                        fontSize="18px"
                        lineHeight="1.8"
                        color="gray"
                    >
                        Discover a comprehensive collection of notes, YouTube videos, and
                        reference books tailored for your subjects. Our platform is
                        designed to enhance your learning experience by providing easy
                        access to essential educational materials.
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" gap="20px">
                <Card sx={{
                    borderRadius: "12px",
                    backgroundColor: "#f0f8ff"
                }}>
                    <CardContent>
                        <Typography>
                            Organize Your Notes
                        </Typography>

                        <Box display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            padding="20px"
                            borderTop="5px solid black"
                            marginTop="20px"
                            borderRadius="12px">
                            <Typography>
                                Our note section allows you to store and manage your personal study materials efficiently. Keep track of your learning progress and access your notes anytime, anywhere.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{
                    borderRadius: "12px",
                    backgroundColor: "#f0f8ff"
                }}>
                    <CardContent>
                        <Typography>
                            Access Video Tutorials
                        </Typography>

                        <Box display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            padding="20px"
                            borderTop="5px solid black"
                            marginTop="20px"
                            borderRadius="12px">
                            <Typography>
                                Enhance your understanding with curated YouTube videos that complement your study materials. Visual learning aids are just a click away to support your academic journey.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box
                mt="20px"
                ml="20px"
                mr="20px"
            >
                <img
                    src="Frontend/src/assets/OIP.jpeg"
                    height="100%"
                    width="100%"
                    style={{ borderRadius: "12px" , border: "2px solid black"}}
                />
            </Box>

        </Box>
    )
}

export default Home;