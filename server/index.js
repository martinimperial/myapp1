const express = require('express');
var cors = require('cors');

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(cors());

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

app.get("/tabledata", (request, response) => {
    const tabledata =  [
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
    response.send(tabledata);
 });