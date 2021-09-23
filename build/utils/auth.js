"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.genToken = exports.comparePass = exports.hashedPass = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashedPass = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcrypt_1.genSalt)(10);
    const hashed = yield (0, bcrypt_1.hash)(password, salt);
    return hashed;
});
exports.hashedPass = hashedPass;
const comparePass = (password, hashed) => __awaiter(void 0, void 0, void 0, function* () {
    let compared = yield (0, bcrypt_1.compare)(password, hashed);
    return compared;
});
exports.comparePass = comparePass;
const genToken = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.sign(payLoad, "Arisgani1712");
});
exports.genToken = genToken;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.verify(token, "Arisgani1712");
});
exports.verifyToken = verifyToken;
