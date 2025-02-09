import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" sx={{ mb: 2 }}>
                {label}
            </Typography>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={onChange}>
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown;