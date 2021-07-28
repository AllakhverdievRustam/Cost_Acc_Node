const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const apiRoutes = require("./src/modules/routes/routes");

app.use("/", apiRoutes);

const url = "mongodb+srv://Rustam:1234qwer@cluster-purchase-list.29x42.mongodb.net/Purchase_List?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(4000, () => {
  console.log('Example app on port 4000!');
});