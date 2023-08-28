import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function BasicButtons(props) {
  const setCount = () => {
    props.setCount(props.count + 1);
  };

  const addDays = (days) => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        onClick={() => {
          setCount();
        }}
      >
        Count
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon
          onClick={() => {
            props.setTime(addDays(10).toDateString());
          }}
        />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon
          onClick={() => {
            props.setMessage("Added to shopping cart");
          }}
        />
      </IconButton>
    </Stack>
  );
}
