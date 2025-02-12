import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: "url('/images/bg.jpg')",
                height: "90vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
            }}
        >
            <Box>
                <Typography variant="h3">Waste Management Made Easy</Typography>
                <Typography variant="h6">
                    Report waste issues, track progress, and improve your surroundings.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
