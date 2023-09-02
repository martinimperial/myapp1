import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import axios from "axios";
import Typography from "@mui/material/Typography";

export default function Products() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      setRecords(data.products);
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
          Total Products: {records.length}
          </Typography></Grid>
        {records.map((record, index) => (
          <Grid item xl={2} md={3} ms={4} xs={6} key={index}>
            <ProductCard record={record} index={index} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
