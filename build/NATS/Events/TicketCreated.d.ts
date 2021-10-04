import { Message } from "node-nats-streaming";
import TicketCreated from "../Types/TicketCreatedData";
import Listener from "./Listener";
declare class TicketCreatorListener extends Listener {
    subject: string;
    queueName: string;
    onMessage(data: TicketCreated, msg: Message): void;
}
export default TicketCreatorListener;
