const express = require("express");
const redis = require("redis");

const app = new express();
const client = redis.createClient({
  host: "redis-server",
});
client.set("visits", 0);

app.get("./", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send(`number of visits is ${visits}`);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
