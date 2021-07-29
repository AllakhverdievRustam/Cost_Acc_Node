const mongoose = require('mongoose');

const { Schema } = mongoose;

const purchaseSchema = new Schema ({
  text: String,
  date: String,
  cost: Number
});

module.exports = Purchase = mongoose.model('purchase', purchaseSchema);