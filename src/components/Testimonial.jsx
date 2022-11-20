import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";


const Testimonial = () => {
  return <Box sx={{backgroundColor: "#000F2E", padding: 3, border: "1px solid #00C7FF", borderRadius: "10px", maxWidth: "315px", position: "relative", mx: 3,}}>

    <Typography variant="body1" sx={{color:"white", mb:2 }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, corporis fugit saepe, deserunt doloribus voluptates rem sequi eaque atque ex autem reiciendis blanditiis! Sequi, voluptatem possimus esse ad pariatur asperiores?

    </Typography>

    <Typography variant="body1" sx={{color: "white", mb: 2}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut aperiam quidem possimus eveniet minus. Ad optio cum inventore molestias. Quaerat quidem maxime reiciendis? Quam odit tempora laborum repellendus incidunt?

    </Typography>

    <Typography variant="body2">
    <span style={{color: "#33C7FF", fontWeight: "bold"}}>Cornelius Iiro</span>
    <span style={{color: "#7B89A8"}}>Ceo of Intellicode</span>
    </Typography>

    <FormatQuoteIcon style={{
      position: "absolute",
      top: "-20px",
      left: "-20px",
      color: "#00C7FF",
      height: "50px",
      width: "50px",
    }}>

    </FormatQuoteIcon>
  </Box>;
};

export default Testimonial;
