"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralErrors_1 = __importDefault(require("../Errors/GeneralErrors"));
const InvalidParamsError_1 = __importDefault(require("../Errors/InvalidParamsError"));
const ErrorHandler = (error, req, res, next) => {
    if (error instanceof GeneralErrors_1.default) {
        console.log("here");
        res.status(error.status).send({ error: error.errorFormat() });
        return;
    }
    if (error instanceof InvalidParamsError_1.default) {
        console.log("here");
        res.status(error.status).send({ error: error.errorFormat() });
        return;
    }
    res.status(400).send([{ msg: error.message }]);
};
exports.default = ErrorHandler;
