import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";

const DigitalLibraryCard = ({ image, title, description }) => {
  return (
    <Card
    mt="10px"
      sx={{
        maxWidth: 380,
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        height="200"
        image={image} // Dynamic image URL
        alt={title}
        sx={{
          borderRadius: "10px 10px 0 0",
        }}
      />
      {/* Text Section */}
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#1d3557",
            marginBottom: "10px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "14px", lineHeight: "1.6", color: "#457b9d" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  const cardData = [
    {
      image: "Frontend/src/assets/Digital.webp",
      title: "Digital Library",
      description: "Access a comprehensive collection of notes, YouTube videos, and reference books tailored for your subjects.",
    },
    {
      image: "Frontend/src/assets/Data.webp",
      title: "Secure Data Storage",
      description: "Store and manage your personal notes securely with our integrated data storage feature.",
    },
    {
      image: "Frontend/src/assets/Dashboard.webp",
      title: "User-Friendly Dashboard",
      description: "Navigate through an intuitive dashboard that provides easy access to all learning materials and tools.",
    },
    {
      image: "Frontend/src/assets/Learning.webp",
      title: "Collaborative Learning",
      description: "Engage with peers and educators through interactive tools and shared resources.",
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      alignItems="center"
      sx={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Heading Section */}
      <Box display="flex" justifyContent="center" mt="30px">
        <Typography
          variant="h1"
          sx={{
            fontWeight: "light",
            fontSize: "3.5rem",
            fontStyle: "oblique",
          }}
        >
          Explore Our Key Features
        </Typography>
      </Box>

      {/* Parent Cards Section */}
      <Box display="flex" gap="30px" flexWrap="wrap" justifyContent="center">
        {/* Digital Library Card */}
        <DigitalLibraryCard
          image={cardData[0].image}
          title={cardData[0].title}
          description={cardData[0].description}
        />
        {/* Secure Data Storage Card */}
        <DigitalLibraryCard
          image={cardData[1].image}
          title={cardData[1].title}
          description={cardData[1].description}
        />
        {/* User-Friendly Dashboard Card */}
        <DigitalLibraryCard
          image={cardData[2].image}
          title={cardData[2].title}
          description={cardData[2].description}
        />
        {/* Collaborative Learning Card */}
        <DigitalLibraryCard
          image={cardData[3].image}
          title={cardData[3].title}
          description={cardData[3].description}
        />
      </Box>

      <Box>
        <Button sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50px'
        }}>
            <Typography fontSize="1em">Learn More</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;