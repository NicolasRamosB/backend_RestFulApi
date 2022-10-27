const express = require("express");
const Container = require("../../../Container");
const router = express.Router();

let productos = [];
const prod = new Container(productos);

router.get("/", (_req, res, next) => {
  try {
    res.status(200).json(prod.getAll());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const selected = prod.getById(id);
    res.status(200).json({
      success: true,
      data: selected,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
    prod.saveProduct(req.body);
    res.status(200).redirect("/public/index.html");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    console.log("body", req.body);
    const data = prod.update(id, req.body);
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const remainProducts = prod.deleteById(id);
    res.status(200).json({
      success: true,
      message: `Deleted element.`,
      data: remainProducts,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/", (_req, res, next) => {
  try {
    prod.deleteAll();
    res.status(200).json({
      success: true,
      message: "All products deleted.",
      data: prod.products,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
