import { Box, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'white',
                color: 'black',
                py: 4,
                px: 3,
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {/* Column 1: About */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        About Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        We are dedicated to providing quality learning resources to help you achieve your educational goals. Explore curated notes, videos, and more.
                    </Typography>
                </Grid>

                {/* Column 2: Quick Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Quick Links
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Link component={RouterLink} to="/" underline="hover" color="inherit">
                            Home
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Courses
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Blog
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Contact Us
                        </Link>
                    </Box>
                </Grid>

                {/* Column 3: Contact */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Email: support@learningplatform.com
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Phone: +1 123-456-7890
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Address: 123 Learning St., Education City
                    </Typography>
                </Grid>

                {/* Column 4: Social Media */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Follow Us
                    </Typography>
                    <Box display="flex" gap={2}>
                        <Link href="#" underline="none" color="inherit" aria-label="Twitter">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                alt="Twitter"
                                width="24"
                                height="24"
                            />
                        </Link>
                        <Link href="#" underline="none" color="inherit" aria-label="Instagram">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                alt="Instagram"
                                width="24"
                                height="24"
                            />
                        </Link>
                        <Link href="#" underline="none" color="inherit" aria-label="LinkedIn">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                                alt="LinkedIn"
                                width="24"
                                height="24"
                            />
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Bottom */}
            <Box
                mt={4}
                pt={2}
                borderTop="1px solid #444"
                textAlign="center"
                color="text.secondary"
            >
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Learning Platform. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;