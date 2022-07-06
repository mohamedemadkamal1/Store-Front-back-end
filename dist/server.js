"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable camelcase */
/* eslint-disable no-tabs */
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var products_1 = __importDefault(require("./handlers/products"));
var users_1 = __importDefault(require("./handlers/users"));
var orders_1 = __importDefault(require("./handlers/orders"));
var app = (0, express_1["default"])();
var port = 3000;
var corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200
};
app.use((0, cors_1["default"])(corsOptions));
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hi, MEK');
});
(0, products_1["default"])(app);
(0, users_1["default"])(app);
(0, orders_1["default"])(app);
app.listen(port, function () {
    console.log("Server is working at http://localhost:".concat(port));
});
exports["default"] = app;
