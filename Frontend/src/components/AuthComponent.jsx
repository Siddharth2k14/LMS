import { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Alert,
    CircularProgress,
    createTheme,
    ThemeProvider
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: "#90bb43",
        },
    },
});

const AuthComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');
    
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
    
            const data = await response.json();
            console.log("Login Response Data:", data); // Log the response data
    
            if (!response.ok) {
                throw new Error(data.message || 'Failed to login');
            }
    
            localStorage.setItem('token', data.token);
            setSuccess('Logged in successfully!');
            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            console.error("Login Error:", err); // Log the error to console for debugging
            setError(err.message || 'Failed to login');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setSuccess('Registration successful! Redirecting to login...');
            setRegisterData({ name: '', email: '', password: '' });
            setTimeout(() => navigate('/login'), 1500);
        } catch (err) {
            setError(err.message || 'Failed to register');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 64px)',
                    bgcolor: '#f5f5f5',
                    padding: 3
                }}
            >
                <Card sx={{ maxWidth: 450, width: '100%' }}>
                    <CardContent>
                        <Typography variant="h5" component="h1" gutterBottom textAlign="center">
                            {isLoginPage ? 'Login' : 'Register'}
                        </Typography>

                        {isLoginPage ? (
                            <form onSubmit={handleLogin}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    margin="normal"
                                    value={loginData.email}
                                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    sx={{ mt: 3 }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? <CircularProgress size={24} /> : 'Login'}
                                </Button>
                                <Box sx={{ mt: 2, textAlign: 'center' }}>
                                    <Typography variant="body2">
                                        Don't have an account?{' '}
                                        <Button 
                                            color="primary" 
                                            onClick={() => navigate('/register')}
                                            sx={{ textTransform: 'none' }}
                                        >
                                            Register here
                                        </Button>
                                    </Typography>
                                </Box>
                            </form>
                        ) : (
                            <form onSubmit={handleRegister}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    value={registerData.name}
                                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    margin="normal"
                                    value={registerData.email}
                                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    value={registerData.password}
                                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    sx={{ mt: 3 }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? <CircularProgress size={24} /> : 'Register'}
                                </Button>
                                <Box sx={{ mt: 2, textAlign: 'center' }}>
                                    <Typography variant="body2">
                                        Already have an account?{' '}
                                        <Button 
                                            color="primary" 
                                            onClick={() => navigate('/login')}
                                            sx={{ textTransform: 'none' }}
                                        >
                                            Login here
                                        </Button>
                                    </Typography>
                                </Box>
                            </form>
                        )}

                        {error && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                {error}
                            </Alert>
                        )}
                        {success && (
                            <Alert severity="success" sx={{ mt: 2 }}>
                                {success}
                            </Alert>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default AuthComponent;