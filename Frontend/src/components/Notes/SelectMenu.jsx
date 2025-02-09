import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";


const SelectMenu = ({ topic }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const renderMenuItems = () => {
        switch (topic) {
          case "Department":
            return (
              <>
                <MenuItem value="CSE">Computer Science Engineering</MenuItem>
                <MenuItem value="ECE">Electronics and Communication Engineering</MenuItem>
                <MenuItem value="ME">Mechanical Engineering</MenuItem>
                <MenuItem value="EE">Electrical Engineering</MenuItem>
              </>
            );
          case "Year":
            return (
              <>
                <MenuItem value="1st">1st Year</MenuItem>
                <MenuItem value="2nd">2nd Year</MenuItem>
                <MenuItem value="3rd">3rd Year</MenuItem>
                <MenuItem value="4th">4th Year</MenuItem>
              </>
            );
          case "Sem":
            return (
              <>
                <MenuItem value="1">Semester 1</MenuItem>
                <MenuItem value="2">Semester 2</MenuItem>
                <MenuItem value="3">Semester 3</MenuItem>
                <MenuItem value="4">Semester 4</MenuItem>
                <MenuItem value="5">Semester 5</MenuItem>
                <MenuItem value="6">Semester 6</MenuItem>
                <MenuItem value="7">Semester 7</MenuItem>
                <MenuItem value="8">Semester 8</MenuItem>
              </>
            );
          case "Subject":
            return (
              <>
                <MenuItem value="Maths">Mathematics</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="CS">Computer Science</MenuItem>
                <MenuItem value="Chem">Chemistry</MenuItem>
              </>
            );
          default:
            return <MenuItem value="None">No options available</MenuItem>;
        }
      };

    return (
        <Box sx={{
            mb: "20px"
        }}>
            <Typography variant="h6" sx={{ mb: "2px", mt: "20px" }}>
                Select Your {topic}
            </Typography>
            <FormControl sx={{ width: 200, height: 100 }}>
                <InputLabel id="demo-simple-select-label">Select an Option</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedOption}
                    label="Select an Option"
                    onChange={handleChange}
                >
                    {renderMenuItems()}
                </Select>
            </FormControl>
            {selectedOption && (
                <Typography variant="body1" sx={{ mt: "2px" }}>
                    You selected: {selectedOption}
                </Typography>
            )}
        </Box>
    )
}

export default SelectMenu;