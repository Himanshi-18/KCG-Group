import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "./Button";
import { FaQuoteLeft } from "react-icons/fa";
import ImageComponent from "./ImageComponent";

const SectionOne = () => {
  return (
    <Box sx={{ backgroundColor: "#fed600" }}>
      <Container sx={{ padding: "100px 0" }}>
        <Grid container spacing={2}>
          <Grid
            xs={7}
            sx={{ padding: "0 90px", borderRight: "1px dashed #d0b31c" }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: "1.5rem",
              }}
            >
              All-in-one suite
            </Typography>

            <Typography variant="h3" sx={{ paddingBottom: "0.5rem" }}>
              KCG Group
            </Typography>
            <Typography variant="p" sx={{ fontSize: "1.25rem" }}>
              The operating system for business
            </Typography>
            <Typography
              sx={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                fontSize: "1.12rem",
                lineHeight: "1.7",
              }}
            >
              Run your entire business on Zoho with our unified cloud software,
              designed to help you break down silos between departments and
              increase organizational efficiency.
            </Typography>
            <Button
              backgroundColor="#f60014"
              text="TRY NOW"
              icon={<RiArrowRightSLine />}
            />
          </Grid>

          <Grid xs={5} sx={{ display: "flex", flexFlow: "column" }}>
            <Box sx={{ width: "90%", marginLeft: "20%" }}>
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "2rem",
                }}
              >
                <FaQuoteLeft />
              </Box>
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "100",
                  lineHeight: "1.4",
                }}
              >
                "You can be a startup, mid-sized company, or an enterprise—Zoho
                One is a boon for all."
              </Typography>
            </Box>
            <Box
              sx={{
                marginLeft: "20%",
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <ImageComponent
                src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-video-poster-prakash.png"
                alt="Banner image"
                radius="50%"
                width="6rem"
                height="6rem"
              />
              <Box sx={{width: "100%"}}>
                <Typography variant="p" sx={{ fontSize: "1.2rem" }}>
                  Prakarsh Gagdani
                </Typography>
                <Typography>
                  CEO, 5paisa.com (an IIFL subsidiary)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionOne;
