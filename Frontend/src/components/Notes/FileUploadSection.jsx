import { useState } from "react";
import { Box, Typography,  Card, CardContent } from "@mui/material";
import FileUpload from "./FileUpload"; // Import the FileUpload component
import VideoForm from "../Videos/VideoForm"
import VideoList from "../Videos/VideoList";

const FileUploadSection = ({topic}) => {
    const [files, setFiles] = useState([]);

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files).map((file) => ({
            name: file.name,
            url: URL.createObjectURL(file),
        }));

        // Prevent duplicate uploads
        const uniqueFiles = uploadedFiles.filter(
            (newFile) => !files.some((existingFile) => existingFile.name === newFile.name)
        );

        setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
    };

    return (
        <Card
            sx={{
                borderRadius: "12px",
                backgroundColor: "#f0f8ff",
            }}
        >
            <CardContent>
                <Typography>Your Personal {topic} Section</Typography>

                {/* Black-bordered area */}
                <Box
                    sx={{
                        border: "2px solid black",
                        maxHeight: "500px",
                        height: "500px",
                        overflowY: "auto",
                        padding: "10px",
                    }}
                >
                    {/* Use the FileUpload Component */}
                    {/* <FileUpload
                        document={files[0]} // Pass the first file (if available) to FileUpload
                        onFileChange={(e) => handleFileUpload(e)} // Handle file upload
                    /> */}
                    
                    {/* <VideoForm /> */}
                    <VideoList />
                    {/* Display uploaded files */}
                    <Box>
                        {files.map((file, index) => (
                            <Typography
                                key={index}
                                sx={{ wordWrap: "break-word", margin: "5px 0" }}
                            >
                                <a
                                    href={file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#1976d2",
                                        textDecoration: "none",
                                    }}
                                >
                                    {file.name}
                                </a>
                            </Typography>
                        ))}
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    padding="20px"
                    borderTop="5px solid black"
                    marginTop="20px"
                    marginLeft="20px"
                    marginRight="20px"
                    borderRadius="12px"
                >
                    <Typography>
                        Store your personal notes securely in our system. Easily organize and retrieve your data whenever you need it, ensuring a seamless study experience.
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default FileUploadSection;