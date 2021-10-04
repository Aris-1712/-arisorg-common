"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = __importDefault(require("./Listener"));
class TicketCreatorListener extends Listener_1.default {
    constructor() {
        super(...arguments);
        this.subject = "ticket:created";
        this.queueName = "ticketcreatorquesue";
    }
    onMessage(data, msg) {
        console.log(data);
        msg.ack();
    }
}
exports.default = TicketCreatorListener;
