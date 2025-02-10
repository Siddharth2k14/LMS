import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// Styled Components
const StyledButton = styled(Button)({
  backgroundColor: "#007bff",
  color: "white",
  margin: "10px",
  "&:hover": { backgroundColor: "#0056b3" },
});

const CloseButton = styled(Button)({
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#ff5c5c",
  color: "white",
  "&:hover": { backgroundColor: "#e64a4a" },
});

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    console.log("Fetching videos...");
    axios
      .get("http://localhost:5000/api/videos")
      .then((response) => {
        console.log("Fetched videos:", response.data);
        setVideos(response.data);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  const handleClickOpen = (videoUrl) => {
    console.log("Clicked video URL:", videoUrl);
    const embedUrl = convertToEmbedUrl(videoUrl);
    console.log("Converted embed URL:", embedUrl);
    setSelectedVideo(embedUrl);
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing modal...");
    setOpen(false);
    setSelectedVideo("");
  };

  const convertToEmbedUrl = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }
    return url;
  };

  useEffect(() => {
    console.log("Modal open state:", open);
  }, [open]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Video List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {videos.map((video) => (
          <li key={video?._id} style={{ marginBottom: "10px" }}>
            <StyledButton onClick={() => handleClickOpen(video.url)}>
              {video.title}
            </StyledButton>
          </li>
        ))}
      </ul>

      {/* Video Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Video</DialogTitle>
        <DialogContent style={{ position: "relative" }}>
          {selectedVideo && (
            <iframe
              width="100%"
              height="450px"
              src={selectedVideo}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          )}
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose}>Close</StyledButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VideoList;