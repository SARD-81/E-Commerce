import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

// Array of characters for the word search grid
const letters = [
  "k",
  "v",
  "n",
  "z",
  "i",
  "x",
  "m",
  "e",
  "t",
  "a",
  "x",
  "l",
  "4",
  "0",
  "4",
  "y",
  "y",
  "w",
  "v",
  "b",
  "o",
  "q",
  "d",
  "y",
  "p",
  "a",
  "p",
  "a",
  "g",
  "e",
  "v",
  "j",
  "a",
  "n",
  "o",
  "t",
  "s",
  "c",
  "e",
  "w",
  "v",
  "x",
  "e",
  "p",
  "c",
  "f",
  "h",
  "q",
  "e",
  "f",
  "o",
  "u",
  "n",
  "d",
  "s",
  "w",
  "q",
  "v",
  "o",
  "s",
  "m",
  "v",
  "f",
  "u",
];

const highlightIndices = [
  12, 13, 14, 26, 27, 28, 29, 33, 34, 35, 52, 53, 54, 55, 56,
]; // indices of 404PAGE NOTFOUND letters

const NotFoundPage: React.FC = () => {
  const [selected, setSelected] = useState<boolean[]>(
    Array(letters.length).fill(false)
  );

  useEffect(() => {
    highlightIndices.forEach((idx, i) => {
      setTimeout(() => {
        setSelected((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
      }, 1500 + i * 500);
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "primary.dark",
        p: 4,
        fontFamily: "Source Sans Pro",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item component="div" xs={12} md={5}>
          <Grid container spacing={0.5} sx={{ width: "100%" }}>
            {letters.map((letter, idx) => (
              <Grid
                item
                component="div"
                key={idx}
                xs={1.6}
                sx={{
                  bgcolor: selected[idx] ? "#E91E63" : "rgba(0,0,0,0.2)",
                  color: selected[idx] ? "#fff" : "rgba(255,255,255,0.7)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 0,
                  paddingTop: "12%", 
                  fontSize: "1.6vw",
                  transition: "background-color 0.75s ease",
                }}
              >
                {letter.toUpperCase()}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item component="div" xs={12} md={5} sx={{ color: "#fff" }}>
          <Typography variant="h3" gutterBottom>
            We couldn't find what you were looking for.
          </Typography>
          <Typography variant="body1" paragraph>
            Unfortunately the page you were looking for could not be found. It
            may be temporarily unavailable, moved or no longer exist.
          </Typography>
          <Typography variant="body1" paragraph>
            Check the URL you entered for any mistakes and try again.
            Alternatively, search for whatever is missing or take a look around
            the rest of our site.
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ mt: 3, mb: 3 }}
          >
            <TextField
              variant="outlined"
              placeholder="Search"
              fullWidth
              InputProps={{ sx: { bgcolor: "rgba(0,0,0,0.2)", color: "#fff" } }}
            />
          </Box>

          <Box
            sx={{
              "& a": {
                mr: 2,
                mb: 2,
                display: "inline-block",
                textDecoration: "none",
              },
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{ bgcolor: "#E91E63" }}
            >
              Home
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/about"
              sx={{ bgcolor: "#E91E63" }}
            >
              About Us
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/sitemap"
              sx={{ bgcolor: "#E91E63" }}
            >
              Site Map
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{ bgcolor: "#E91E63" }}
            >
              Contact
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFoundPage;
