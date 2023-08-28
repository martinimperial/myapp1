import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

/*
    "calories": 159,
    "fat": 6,
    "carbs": 24,
    "protein": 4
*/
export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Paper sx={{ p: 2 }} sx={{maxWidth: 200}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField label={"calories:"} value={159}></TextField>
            </Grid>

            <Grid item xs={12}>
            <TextField label={"fat:"} value={6}></TextField>
            </Grid>

            <Grid item xs={12}>
            <TextField label={"carbs:"} value={24}></TextField>
            </Grid>
  
            <Grid item xs={12}>
            <TextField label={"protein:"} value={6}></TextField>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
