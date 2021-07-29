const express = require('express');

const router = express.Router();


const {
  getAllPurchase,
  addNewPurchase,
  deletePurchase,
  editPurchase
} = require('../controllers/purchase.controllers');

router.get('/getAllPurchase', getAllPurchase);
router.post('/addNewPurchase', addNewPurchase);
router.delete('/deletePurchase', deletePurchase);
router.patch('/editPurchase', editPurchase);

module.exports = router;