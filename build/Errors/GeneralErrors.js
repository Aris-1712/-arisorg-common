"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeneralErrors extends Error {
    constructor(errors) {
        super("General Error");
        this.status = 500;
        this.errorFormat = () => {
            return this.errors.map((ele) => {
                return { msg: ele.msg, param: ele.param };
            });
        };
        this.errors = errors;
        Object.setPrototypeOf(this, GeneralErrors.prototype);
    }
}
exports.default = GeneralErrors;
