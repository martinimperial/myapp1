import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const signin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/signin",
        { user: username, password: password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      if (data.status === "ok") {
        navigate("/");
      } else {
        navigate("/color");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Item>
              <Typography>
                Welcome to Martin's Website. Please log-in.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <TextField
                label="User"
                value={username}
                onChange={handleChangeUsername}
              ></TextField>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <TextField
                label="Password"
                value={password}
                onChange={handleChangePassword}
                type="password"
              ></TextField>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Button onClick={signin}>Submit</Button>
            </Item>
          </Grid>
        </Grid>
    </Box>
  );
}
