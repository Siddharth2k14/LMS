import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { AppBar, Box, Button, createTheme, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../assets/logo.svg';

const theme = createTheme({
    palette: {
        primary: {
            main: "#90bb43",
        },
    },
});

const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "white",
                        boxShadow: "none",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Navigation Links */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                            }}
                        >
                            <Link to="/" style={{ textDecoration: "none", color: theme.palette.primary.main }}>
                                Home
                            </Link>
                            <Link to="/notes" style={{ textDecoration: "none", color: theme.palette.primary.main }}>
                                Notes
                            </Link>
                            <Link to="/videos" style={{ textDecoration: "none", color: theme.palette.primary.main }}>
                                Videos
                            </Link>
                            <Link to="/books" style={{ textDecoration: "none", color: theme.palette.primary.main }}>
                                Books
                            </Link>
                            <Link to="/about" style={{ textDecoration: "none", color: theme.palette.primary.main }}>
                                About Us
                            </Link>
                        </Box>

                        {/* Logo */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                                textAlign: "center",
                                color: "black",
                            }}
                        >
                            <img src={logo} width="70" alt="Logo" />
                        </Typography>

                        {/* Social Media Icons and Auth Buttons */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <IconButton href="https://facebook.com" target="_blank" color="primary">
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank" color="primary">
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" color="primary">
                                <Instagram />
                            </IconButton>
                            <IconButton href="https://youtube.com" target="_blank" color="primary">
                                <YouTubeIcon />
                            </IconButton>
                            {/* Login and Register Buttons */}
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Button variant="contained" color="primary">Login</Button>
                            </Link>
                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <Button variant="contained" color="primary">Register</Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default NavBar;