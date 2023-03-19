import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
var PORT: number = +(process.env.PORT || 3000); // + is used to convert string to number

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

var server = app.listen(PORT, () => {
  let { port, address } = server.address() as { port: number; address: string };
  

  // console.log(`\x1b[34m Server started on port ${PORT}  \x1b[0m`);
  console.log(` \x1b[32m 🚀 [server]: Server started on ${
    address === "::" ? "http://localhost" : `https://${address}`
  }:${port}/api/ \x1b[0m`);
});

// Change the port number if it is already in use
server.on("error", (error) => {

  if (error.message.includes("EADDRINUSE")) {
    console.log(`\x1b[33m Port ${PORT} is already in use \x1b[0m`);
    console.log("\x1b[33m Trying to use port \x1b[0m", ++PORT);
    server.listen(PORT);
  }
});
