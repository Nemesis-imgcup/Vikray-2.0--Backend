import express from "express";
import dotenv from "dotenv";
import { uploadNewItem } from "./routes";
import beautifyLogs from "./utils/beautifyLogs";

const app = express();
dotenv.config();
var PORT: number = +(process.env.PORT || 3000); // + is used to convert string to number

app.get("/api", (req, res) => {
	res.send("Hello World!");
});

// Upload new item to the database
app.use("/api/item", uploadNewItem);

var server = app.listen(PORT, () => {
	let { port, address } = server.address() as {
		port: number;
		address: string;
	};

	beautifyLogs.success(
		` \x1b[32m 🚀 [server]: Server started on ${
			address === "::" ? "http://localhost" : `http://${address}`
		}:${port}/api/ \x1b[0m`
	);
});

// Change the port number if it is already in use
server.on("error", (error) => {
	if (error.message.includes("EADDRINUSE")) {
		beautifyLogs.warning(`Port ${PORT} is already in use`);
		beautifyLogs.warning(`Trying to use port ${++PORT}`);
		server.listen(PORT);
	}
});
