import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import ImageComponent from "./ImageComponent";
import Button from "./Button";
import { FaQuoteLeft } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

const Enterprise = () => {
  return (
    <Box>
      <Container sx={{ padding: "100px 0" }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <ImageComponent
              src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-enterprise-illus.svg"
              alt="Enterprise image"
              width="100%"
            />
            <Box
              sx={{
                position: "relative",
                top: -20,
                right: -50,
                width: 45,
                height: 45,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              <FaQuoteLeft />
            </Box>

            <Box sx={{ display: "flex", padding: "0 0 30px 60px" }}>
              <Box>
                <Typography
                  variant="p"
                  sx={{ fontSize: "1.5rem", lineHeight: "1.5" }}
                >
                  "With our complete business under control, our productivity is
                  up by 80% in the last year that we have been using Zoho."
                </Typography>
                <Typography sx={{ fontSize: "1.25rem", fontWeight: "600" }}>
                  Thomas John
                </Typography>
                <Typography
                  sx={{
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                    fontSize: "1.12rem",
                    lineHeight: "1.7",
                  }}
                >
                  Managing Director, Agappe Diagnostics
                </Typography>
              </Box>

              <Box sx={{ width: "100%" }}>
                <ImageComponent
                  src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-video-poster-prakash.png"
                  alt="Banner image"
                  radius="50%"
                  width="7rem"
                  height="8rem"
                />
                <Box>
                  <Link href="#" underline="none" sx={{ fontSize: "0.95rem" }}>
                    READ THE STORY <RiArrowRightSLine />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid xs={6} sx={{ display: "flex", flexFlow: "column" }}>
            <Box sx={{ width: "90%", marginLeft: "20%" }}>
              <ImageComponent
                src="https://www.zohowebstatic.com/sites/zweb/images/producticon/enterprise-en-in.svg"
                alt="Enterprise image"
                width="100%"
              />
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "100",
                  lineHeight: "1.4",
                }}
              >
                Experience the breadth and depth of the Zoho ecosystem, with the
                professional services, infrastructure, support, and security
                that a large business needs. Streamline complex business
                processes, build strong relationships with your customers, and
                drive growth at scale.
              </Typography>
              <Button
                backgroundColor="#f60014"
                text="TRY NOW"
                icon={<RiArrowRightSLine />}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Enterprise;
