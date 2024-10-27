const express = require("express");
const app = new express();
const PORT = 5000;

let entityRouter = express.Router();

app.use("/entity", entityRouter);

entityRouter.get("/:id", (req, res) => {
    if(!isNaN(req.params.id)){
        res.status(200).send("The given id is: " + req.params.id)
    } else{
        res.status(400).send("Not a number");
    }
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));