import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box textAlign="center" py={3} sx={{ background: "#1B5E20", color: "white" }}>
            <Typography variant="body2">© 2025 Track Trash. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
