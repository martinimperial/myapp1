const express = require('express');
var cors = require('cors');

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

app.get("/tabledata", (request, response) => {
    const tabledata = [ {"calories": 159, "fat": 6.0, "carbs":	24, "protein": 4.0},
    {"calories": 237, "fat": 6.0, "carbs":	24, "protein": 4.0},
    {"calories": 262, "fat": 6.0, "carbs":	24, "protein": 4.0},
    {"calories": 305, "fat": 6.0, "carbs":	24, "protein": 4.0},
    {"calories": 356, "fat": 6.0, "carbs":	24, "protein": 4.0}];
    
    response.send(tabledata);
 });