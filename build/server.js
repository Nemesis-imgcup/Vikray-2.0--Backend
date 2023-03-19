"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
var PORT = +(process.env.PORT || 3000); // + is used to convert string to number
app.get("/api", (req, res) => {
    res.send("Hello World!");
});
var server = app.listen(PORT, () => {
    let { port, address } = server.address();
    // console.log(`\x1b[34m Server started on port ${PORT}  \x1b[0m`);
    console.log(` \x1b[32m 🚀 [server]: Server started on ${address === "::" ? "http://localhost" : `https://${address}`}:${port}/api/ \x1b[0m`);
});
// Change the port number if it is already in use
server.on("error", (error) => {
    if (error.message.includes("EADDRINUSE")) {
        console.log(`\x1b[33m Port ${PORT} is already in use \x1b[0m`);
        console.log("\x1b[33m Trying to use port \x1b[0m", ++PORT);
        server.listen(PORT);
    }
});
//# sourceMappingURL=server.js.map