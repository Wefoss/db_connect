const { Thing } = require("../models");

module.exports.createThing = async (req, res, next) => {
  try {
    const { body } = req;
    const newThing = await Thing.create(body);
    if (newThing) {
      res.status(201).send(newThing);
    }
    res.status(404).send();
  } catch (error) {
    next(error);
  }
};

module.exports.getAllThings = async (req, res, next) => {
  try {
    const arrayThings = await Thing.getAll();
    if (arrayThings.length) {
      res.status(200).send(arrayThings);
    }
    res.status(400).send();
  } catch (error) {
    next(error);
  }
};

module.exports.getThing = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const getOne = await Thing.findByPk(id);
    if (getOne.length) {
      res.status(200).send(getOne);
    }
    res.status(400).send();
  } catch (error) {
    next(error);
  }
};

module.exports.updateThing = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const updateOne = await Thing.updateByPk(body, id);
    if (updateOne) {
      res.status(201).send();
    }
    res.status(404).send();
  } catch (error) {
    next(error);
  }
};

module.exports.deleteThing = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const updateOne = await Thing.deleteByPk(id);
    res.status(200).send(updateOne);
  } catch (error) {
    next(error);
  }
};
