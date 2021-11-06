const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/products", async (req, res) => {
  let page = parseInt(req.query.page);
  let pageSize = parseInt(req.query.size);
  pageSize = !pageSize ? 6 : pageSize;
  const { data: articles } = await axios.get(
    "https://fakestoreapi.com/products"
  );
  const totalProducts = articles.length;
  const pagesCount = Math.ceil(totalProducts / pageSize);
  page = !page || page < 1 ? 1 : page;
  if (page > pagesCount) {
    return res.json([]);
  }
  return res
    .status(200)
    .json(articles.slice(pageSize * (page - 1), pageSize * page));
});

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
