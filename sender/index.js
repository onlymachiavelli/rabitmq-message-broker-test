const express = require("express")

const app = express()

app.use("/health", (req, res) => {
  res.status(200).send("Healthy")
})
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
