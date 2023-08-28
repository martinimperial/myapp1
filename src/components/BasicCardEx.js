import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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

export default function BasicCardEx(props) {
  const [state, setState] = React.useState(props.record);

  const handleChange = (event) => {
    console.log(event.target.name);
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <Card sx={{ minWidth: 150 }} key={props.index}>
      <CardHeader title={state.name}></CardHeader>
      <CardContent>
        <Paper sx={{ p: 2 }} sx={{ maxWidth: 250}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={"calories:"}
                value={state.calories}
                name="calories"
                type
                onChange={(e) => {
                  handleChange(e);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={"fat:"}
                value={state.fat}
                name={"fat"}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={"carbs:"}
                value={state.carbs}
                name={"carbs"}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={"protein:"}
                value={state.protein}
                name={"protein"}
                onChange={handleChange}
              ></TextField>
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
