"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const GeneralErrors_1 = require("../Errors/GeneralErrors");
const InvalidParamsError_1 = require("../Errors/InvalidParamsError");
const ErrorHandler = (error, req, res, next) => {
    if (error instanceof GeneralErrors_1.GeneralErrors) {
        console.log("here");
        res.status(error.status).send({ error: error.errorFormat() });
        return;
    }
    if (error instanceof InvalidParamsError_1.InvalidParamsError) {
        console.log("here");
        res.status(error.status).send({ error: error.errorFormat() });
        return;
    }
    res.status(400).send([{ msg: error.message }]);
};
exports.ErrorHandler = ErrorHandler;
