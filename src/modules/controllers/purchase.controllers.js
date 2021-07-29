const Purchase = require('../../db/models/purchase/Index');

module.exports.getAllPurchase = (req, res) => {
  Purchase.find().then(result => {
    res.send({data: result});
  });
};

module.exports.addNewPurchase = (req, res) => {
  const purchase = new Purchase(req.body);
  const body = req.body;

  if (body.hasOwnProperty('text') 
  && body.hasOwnProperty('date') 
  && body.hasOwnProperty('cost')) {
    purchase.save(req.body).then(() => {
      Purchase.find().then(result => {
        res.send({data: result});
      });
    });
  } else {
    res.status(422).send('Error!');
  }
};

module.exports.deletePurchase = (req, res) => {
  if (req.query._id) {
    Purchase.deleteOne({ _id: req.query._id }).then(() => {
      Purchase.find().then(result => {
        res.send({data: result});
      });
    });
  } else {
    res.status(422).send('Error!');
  }
};

module.exports.editPurchase = (req, res) => {
  const body = req.body;

  if (body.hasOwnProperty('_id') && body._id) {
    Purchase.updateOne({ _id: req.body._id }, req.body).then(() => {
      Purchase.find().then(result => {
        res.send({data: result});
      });
    });
  } else {
    res.status(422).send('Error!');
  }
};