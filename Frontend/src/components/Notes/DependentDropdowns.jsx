import { useState } from "react";
import { Box, Grid } from "@mui/material";
import Dropdown from "./Dropdown";
import FileUploadSection from "./FileUploadSection";

const DependentDropdowns = () => {
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");
    const [document, setDocument] = useState(null);

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
        setYear("");
        setSemester("");
        setSubject("");
        setDocument(null);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
        setSemester("");
        setSubject("");
        setDocument(null);
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
        setSubject("");
        setDocument(null);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
        setDocument(null);
    };

    const getSemestersForYear = (selectedYear) => {
        switch (selectedYear) {
            case "1st":
                return ["Semester 1", "Semester 2"];
            case "2nd":
                return ["Semester 3", "Semester 4"];
            case "3rd":
                return ["Semester 5", "Semester 6"];
            case "4th":
                return ["Semester 7", "Semester 8"];
            default:
                return [];
        }
    };

    const getSubjectsForSem = (selectedSem) => {
        if (department === "CSE") {
            switch (selectedSem) {
                case "Semester 3":
                    return [
                        "C++",
                        "Computer Organization and Architecture",
                        "Data Structures",
                        "Digital Circuits and Logic Design",
                        "Discrete Mathematics",
                        "Professional and Software Ethics",
                        "Universal Human Values",
                    ];
                case "Semester 4":
                    return [
                        "Computer Networks I",
                        "Design and Analysis of Algorithm",
                        "Probability and Statistical Analysis",
                        "IOT",
                        "Computer Graphics",
                        "Programming Methodology",
                    ];
                default:
                    return [];
            }
        } else if (department === "ECE") {
            switch (selectedSem) {
                case "Semester 3":
                    return [
                        "Engineering Mathematics III",
                        "Electronic Devices and Components",
                        "Digital Electronics and Systems Design",
                        "Signals and Systems",
                        "Network Analysis and Synthesis",
                        "Microprocessor, Microcontroller and ARM Processor",
                    ];
                case "Semester 4":
                    return [
                        "Engineering Mathematics IV",
                        "Electromagnetic Waves",
                        "Analog Electronic Circuits",
                        "Digital Signal Processing",
                        "IOT",
                        "Universal Human Values",
                        "Database Management System",
                    ];
                default:
                    return [];
            }
        } else if (department === "IT"){
            switch (selectedSem) {
                case "Semester 3":
                    return [
                        "Engineering Mathematics III",
                        "Data Structures",
                        "Digital Circuits and Logic Design",
                        "Python Programming",
                        "Numerical Techniques",
                        "Computer Organization and Architecture",
                    ];
                case "Semester 4":
                    return [
                        "Engineering Mathematics IV",
                        "Object-Oriented Programming",
                        "Database Management System",
                        "Formal Language and Automata Theory",
                        "Universal Human Values II",
                    ];
            }
        } 
        
        else {
            // Generic cases for all departments or fallback
            switch (selectedSem) {
                case "Semester 1":
                    return [
                        "Engineering Mathematics 1",
                        "Physics",
                        "Elements of Civil Engineering",
                        "Basic Electronics",
                        "Engineering Graphics",
                        "Physics lab",
                        "Constitution of India",
                        "Communication Skills",
                    ];
                case "Semester 2":
                    return [
                        "Engineering Mathematics 2",
                        "Chemistry",
                        "Elements of Electrical Engineering",
                        "Elements of Mechanical Engineering",
                        "Computer Programming",
                        "Chemistry lab",
                        "Environmental Science",
                        "Computer Programming lab",
                    ];
                default:
                    return [];
            }
        }
    };


    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6} lg={4}>
                    <Dropdown
                        label="Select Your Department"
                        value={department}
                        options={[
                            "CSE",
                            "ECE",
                            "IT",
                        ]}
                        onChange={handleDepartmentChange}
                    />
                </Grid>
                {department && (
                    <Grid item xs={12} md={6} lg={4}>
                        <Dropdown
                            label="Select Your Year"
                            value={year}
                            options={["1st", "2nd", "3rd", "4th"]}
                            onChange={handleYearChange}
                        />
                    </Grid>
                )}
                {year && (
                    <Grid item xs={12} md={6} lg={4}>
                        <Dropdown
                            label="Select Your Semester"
                            value={semester}
                            options={getSemestersForYear(year)}
                            onChange={handleSemesterChange}
                        />
                    </Grid>
                )}
                {semester && (
                    <Grid item xs={12} md={6} lg={4}>
                        <Dropdown
                            label="Select Your Subject"
                            value={subject}
                            options={getSubjectsForSem(semester)}
                            onChange={handleSubjectChange}
                        />
                    </Grid>
                )}
                {semester && subject && (
                    <Grid>
                        <FileUploadSection />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default DependentDropdowns;