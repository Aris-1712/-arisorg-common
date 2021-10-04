import { Message, Stan } from "node-nats-streaming";
declare abstract class Listener {
    private client;
    abstract subject: string;
    abstract queueName: string;
    abstract onMessage(data: any, msg: Message): void;
    constructor(client: Stan);
    subscribeOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
}
export default Listener;
