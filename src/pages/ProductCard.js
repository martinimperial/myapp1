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
import {TextField} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';

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


const TypographyEx = styled(Typography)({
  textDecoration: "line-through",
  color: "red",
  FontFace: "Helvetica"
});

export default function ProductCard(props) {
  const [state, setState] = React.useState(props.record);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Card
      sx={{ minWidth: 150 }}
      key={props.index}
      alignItems="center"
      justify="center"
      style={{ minHeight: "250" }}
      onClick={()=>{alert("Add to basket")}}
    >
      <Tooltip title={"Sold by: " + state.SupplierName}>
      <CardHeader
        title={state.ProductName}
        subheader={state.CategoryName}
      ></CardHeader>
      </Tooltip>
      <CardMedia
        sx={{ height: 200, width: "100%", align: "center" }}
        image={state.PhotoUrl}
        title="green iguana"
      />
      <CardContent>
        <Paper sx={{ p: 2, maxWidth: 250 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" color="black">
                {state.Description}
              </Typography>
              <Typography variant="h5" color="black">
                {state.productDescription}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="grey" inline>{state.Unit}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" noWrap display="inline">
                £{state.Price}{"  "}
              </Typography>
              <TypographyEx variant="h5" noWrap display="inline">
                £{state.Discount}
              </TypographyEx>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              {Array.from({ length: state.ratings }, (_, i) => (
                <Avatar
                  key={i}
                  variant={"rounded"}
                  alt="The image"
                  src={"/static/images/cards/star.jpeg"}
                  style={{ width: 24, height: 24 }}
                />
              ))}
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
