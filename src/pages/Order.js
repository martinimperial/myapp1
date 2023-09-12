import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import OrderCard from "./OrderCard";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
export default function Orders() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/order",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      setRecords(data.order);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const getTotalPrice = () => {
    let totalPrice = 0.0;
    for (let i = 0; i < records.length; i++) {
      let record = records[i];
      totalPrice += record.orderPrice;
    }
    return totalPrice;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    for (let i = 0; i < records.length; i++) {
      let item = records[i];
      totalItems = totalItems + item.quantity;
    }
    return totalItems;
  };

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography>Total Orders: {records.length}</Typography>
        </Grid>
        {records.map((record, index) => (
          <Grid item xs={12} key={index}>
            <OrderCard record={record} index={index} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper sx={{ paddingTop: 3, paddingBottom: 3, paddingRight: 3 }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-between"
              alignItems="flex-between"
            >
              <Grid item xs={12} align="right">
                <Typography variant="h3" noWrap={true} display="inline">
                  Subtotal ({getTotalItems()} items):
                </Typography>
                <Typography variant="h3" noWrap={true} display="inline"> £{getTotalPrice()}</Typography>
              </Grid>
              <Grid item xs={12} align="right">
                <Typography variant="h6" noWrap={true} display="inline">
                  VAT: £{(getTotalPrice() * 0.2).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={12} align="right">
                <Typography variant="h5" sx={{marginBottom: 2}}>
                  Total to Pay: £
                  {(getTotalPrice() + getTotalPrice() * 0.2).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={12} align='center'>
                <Button variant="contained" onClick={()=>alert("Hello")}>
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
