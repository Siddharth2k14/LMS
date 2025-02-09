import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Paper, CircularProgress } from "@mui/material";

const getVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const fetchVideoTitle = async (videoUrl, setTitle) => {
    const videoId = getVideoId(videoUrl);
    if (!videoId) {
        alert("Invalid YouTube URL");
        return;
    }

    const apiKey = "<YOUR_YOUTUBE_API_KEY>"; // Replace with your API Key
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

    try {
        const response = await axios.get(apiUrl);
        const title = response.data.items[0].snippet.title;
        setTitle(title);
    } catch (error) {
        console.error("Error fetching video title:", error);
        alert("Failed to fetch video title. Please check the URL.");
    }
};

const VideoForm = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:5000/api/videos", { title, url });
            alert("Video added successfully!");
            setTitle("");
            setUrl("");
        } catch (error) {
            console.error("Error saving video:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUrlChange = (e) => {
        const newUrl = e.target.value;
        setUrl(newUrl);
        if (newUrl) {
            fetchVideoTitle(newUrl, setTitle);
        } else {
            setTitle("");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Add YouTube Video
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="YouTube URL"
                        value={url}
                        onChange={handleUrlChange}
                        required
                        margin="normal"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={loading}
                        style={{ marginTop: 20 }}
                    >
                        {loading ? <CircularProgress size={24} /> : "Submit"}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default VideoForm;