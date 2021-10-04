import { Message } from "node-nats-streaming"
import TicketCreated from "../Types/TicketCreatedData"
import Listener from "./Listener"

class TicketCreatorListener extends Listener {
    subject="ticket:created"
    queueName="ticketcreatorquesue"
    onMessage(data:TicketCreated,msg:Message){
        console.log(data)
        msg.ack()
    }
}



export default TicketCreatorListener