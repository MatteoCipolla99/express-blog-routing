const express = require("express");
const postsData = require("../data/posts");

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
  res.json(postsData);
});

//SHOW
router.get("/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    return res.sendStatus(400);
  }

  const posts = postsData.find((elm) => elm.id == req.params.id);

  if (posts) {
    return res.sendStatus(404);
  }

  res.json(posts);
});

//STORE
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

//UPDATE
router.put("/:id", (req, res) => {
  res.send(`Modifica integrale del post: ${req.params.id}`);
});

//MODIFY
router.patch("/:id", (req, res) => {
  res.send(`Modifica parziale del post: ${req.params.id}`);
});

//DESTROY
router.delete("/:id", (req, res) => {
  res.send(`Eliminazione del post: ${req.params.id}`);
});

module.exports = router;
