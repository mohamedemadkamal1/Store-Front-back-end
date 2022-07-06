"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, HOST_OF_THE_DATABASE = _a.HOST_OF_THE_DATABASE, PORT_OF_THE_DATABASE = _a.PORT_OF_THE_DATABASE, NAME_OF_THE_DATABASE = _a.NAME_OF_THE_DATABASE, NAME_OF_TEST_DATABASE = _a.NAME_OF_TEST_DATABASE, USER_OF_THE_DATABASE = _a.USER_OF_THE_DATABASE, PASSWORD_FOR_POSTGRES = _a.PASSWORD_FOR_POSTGRES, ENV = _a.ENV;
var database;
if (ENV === 'dev') {
    database = new pg_1.Pool({
        host: HOST_OF_THE_DATABASE,
        database: NAME_OF_THE_DATABASE,
        user: USER_OF_THE_DATABASE,
        password: PASSWORD_FOR_POSTGRES,
        port: PORT_OF_THE_DATABASE
    });
}
if (ENV === 'test') {
    database = new pg_1.Pool({
        host: HOST_OF_THE_DATABASE,
        database: NAME_OF_TEST_DATABASE,
        user: USER_OF_THE_DATABASE,
        password: PASSWORD_FOR_POSTGRES,
        port: PORT_OF_THE_DATABASE
    });
}
exports["default"] = database;
