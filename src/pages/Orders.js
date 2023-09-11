import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import OrderCard from "./OrderCard";
import axios from "axios";
import Typography from "@mui/material/Typography";

export default function Orders() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/orders",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      setRecords(data.orders);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}><Typography>
          Total Orders: {records.length}
          </Typography></Grid>
        {records.map((record, index) => (
          <Grid item xl={2} md={3} ms={4} xs={6} key={index}>
            <OrderCard record={record} index={index} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
