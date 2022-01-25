const express = require('express');
const ThingController = require('../controllers/thing.controller');

const router = express.Router();

router.post('/thing', ThingController.createThing);
router.get('/thing', ThingController.getAllThings);

router
  .route('/thing/:id')
  .get(ThingController.getThing)
  .put(ThingController.updateThing)
  .delete(ThingController.deleteThing)

module.exports = router; 