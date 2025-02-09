import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// Custom styled button using MUI's system
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#007bff",
  color: "white",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

// Custom style for the close button
const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#ff5c5c",
  color: "white",
  "&:hover": {
    backgroundColor: "#e64a4a",
  },
}));

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/videos")
      .then((response) => setVideos(response.data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  const handleClickOpen = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="video-list-container">
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <StyledButton onClick={() => handleClickOpen(video.url)}>{video.title}</StyledButton>
          </li>
        ))}
      </ul>

      {/* MUI Dialog for the modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Video</DialogTitle>
        <DialogContent>
          <CloseButton onClick={handleClose}>X</CloseButton>
          {selectedVideo && (
            <iframe
              width="100%"
              height="400px"
              src={selectedVideo.replace("watch?v=", "embed/")}
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