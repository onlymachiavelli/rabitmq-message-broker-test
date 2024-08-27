const express = require("express")

const app = express()

app.use("/health", (req, res) => {
  res.status(200).send("Iam healthy")
})
app.listen(3001, () => {
  console.log("Listening on 3001")
})
