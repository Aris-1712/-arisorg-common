"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParamsError = void 0;
class InvalidParamsError extends Error {
    constructor(errors) {
        super("Invalid Param Error");
        this.status = 401;
        this.errorFormat = () => {
            return this.errors.map((ele) => {
                return ({ msg: ele.msg, param: ele.param });
            });
        };
        this.errors = errors;
        Object.setPrototypeOf(this, InvalidParamsError.prototype);
    }
}
exports.InvalidParamsError = InvalidParamsError;
