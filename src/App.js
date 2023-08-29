import "./App.css";

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BasicButtons from "./components/BasicButtons";
import BasicCard from "./components/BasicCard";
import BasicCardEx from "./components/BasicCardEx";
import RecipeReviewCard from "./components/RecipeReviewCard";
import MediaCard from "./components/MediaCard";
import SimpleDialog from "./components/SimpleDialog";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const emails = ["username@gmail.com", "user02@gmail.com"];

function App() {
  const [records, setRecords] = useState([]);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [time, setTime] = useState(new Date().toDateString());
  const [message, setMessage] = useState("hello");

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);


  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tabledata");
      const data = await response.data;
      setRecords(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Item>
            <BasicButtons
              count={count}
              setCount={setCount}
              message={message}
              setMessage={setMessage}
              setTime={setTime}
            />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <Button
              onClick={() => {
                setCount2(count2 + 10);
              }}
            >
              Count2
            </Button>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <Button
              onClick={() => {
                handleClickOpen();
              }}
            >
              Popup
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </Item>
        </Grid>

        {records.map((record, index) => (
          <Grid item xl={2} md={3} ms={4} xs={6} key={index}>
            <BasicCardEx record={record} index={index} />
          </Grid>
        ))}

        <Grid item xs={8}>
          <Item>{count}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{count2}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{time}</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>{message}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{selectedValue}</Item>
        </Grid>
        <Grid item xs={4}>
          <BasicCard />
        </Grid>
        <Grid item xs={4}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
