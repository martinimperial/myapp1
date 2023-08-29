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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const emails = ["username@gmail.com", "user02@gmail.com"];

const records = [
  {
    name: "Frozen yoghurt",
    image: "yoghurt.jpeg",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    name: "Ice cream sandwich",
    image: "icecream.jpeg",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: "Eclair",
    image: "Eclair.jpeg",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6,
  },
  {
    name: "Cupcake",
    image: "cupcake.jpg",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: "Gingerbread",
    image: "gingerbread.jpeg",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [time, setTime] = useState(new Date().toDateString());
  const [message, setMessage] = useState("hello");

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
