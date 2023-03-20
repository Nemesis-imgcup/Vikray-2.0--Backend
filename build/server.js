"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const beautifyLogs_1 = __importDefault(require("./utils/beautifyLogs"));
const app = (0, express_1.default)();
dotenv_1.default.config();
var PORT = +(process.env.PORT || 3000); // + is used to convert string to number
app.get("/api", (req, res) => {
    res.send("Hello World!");
});
// Upload new item to the database
app.use("/api/item", routes_1.uploadNewItem);
var server = app.listen(PORT, () => {
    let { port, address } = server.address();
    beautifyLogs_1.default.success(` \x1b[32m 🚀 [server]: Server started on ${address === "::" ? "http://localhost" : `http://${address}`}:${port}/api/ \x1b[0m`);
});
// Change the port number if it is already in use
server.on("error", (error) => {
    if (error.message.includes("EADDRINUSE")) {
        beautifyLogs_1.default.warning(`Port ${PORT} is already in use`);
        beautifyLogs_1.default.warning(`Trying to use port ${++PORT}`);
        server.listen(PORT);
    }
});
//# sourceMappingURL=server.js.map