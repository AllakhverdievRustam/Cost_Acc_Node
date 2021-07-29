const Purchase = require('../../db/models/purchase/Index');

module.exports.getAllPurchase = (req, res) => {
  Purchase.find().then(result => {
    res.send({data: result});
  });
};

module.exports.addNewPurchase = (req, res) => {
  const purchase = new Purchase(req.body);
  
  purchase.save(req.body).then(result => {
    res.send(result);
  });
};

module.exports.deletePurchase = (req, res) => {
  Purchase.deleteOne({ _id: req.query._id }).then(() => {
    Purchase.find().then(result => {
      res.send({data: result});
    });
  });
};

module.exports.editPurchase = (req, res) => {
  Purchase.updateOne({ _id: req.body._id }, req.body).then(result => {
    res.send({data: result});
  });
};