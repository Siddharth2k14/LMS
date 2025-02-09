import { Box, Button, Typography } from "@mui/material";

const FileUpload = ({ document, onFileChange }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" sx={{ mb: 2 }}>
                Upload Document
            </Typography>
            <Button variant="contained" component="label">
                Choose File
                <input type="file" hidden onChange={onFileChange} />
            </Button>
            {document && (
                <Box
                    sx={{
                        mt: 2,
                        p: 2,
                        border: "1px solid black",
                        borderRadius: "4px",
                        width: "100%",
                        maxWidth: 300,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2">Uploaded File: {document.name}</Typography>
                    <Button
                        variant="outlined"
                        sx={{ mt: 1 }}
                        onClick={() => {
                            const fileURL = URL.createObjectURL(document);
                            window.open(fileURL, "_blank");
                        }}
                    >
                        Open
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default FileUpload;