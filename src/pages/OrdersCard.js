import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { ArrowDropDown } from "../../node_modules/@mui/icons-material/index";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OrdersCard(props) {
  const [state, setState] = React.useState(props.record);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  /*
      "ShipperName": "Federal Shipping"
  */
  return (
    <Card sx={{ minWidth: 150 }} key={props.index}>
      <CardHeader title={state.ProductName}></CardHeader>
      <CardContent>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={2}>
              <CardMedia
                sx={{ height: 140, width: 140 }}
                image={"/static/images/cards/yoghurt.jpeg"}
                title="green iguana"
              />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5" color="black">
                {state.Description}
              </Typography>
              <Typography variant="h5" color="black">
                {state.productDescription}
              </Typography>
              <Typography variant="h6" color="black">
                <i>Quantity: </i>
                {state.quantity}
              </Typography>
              <Typography variant="h6" color="black">
                <i>Unit Price: </i>£{state.Price}
              </Typography>
              <Typography variant="h6" color="black">
                <i>Order Price: </i>£{state.orderPrice}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  );
}
