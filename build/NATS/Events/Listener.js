"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Listener {
    constructor(client) {
        this.client = client;
    }
    subscribeOptions() {
        return this.client.subscriptionOptions().setManualAckMode(true).setDeliverAllAvailable().setDurableName(this.queueName);
    }
    listen() {
        this.client.subscribe(this.subject, this.queueName, this.subscribeOptions()).on("message", (msg) => {
            console.log("here");
            this.onMessage(msg.getData(), msg);
        });
    }
}
exports.default = Listener;
