import { Message, Stan } from "node-nats-streaming"

abstract class  Listener {
    private client:Stan
    abstract subject:string
    abstract queueName:string
    abstract onMessage(data:any,msg:Message):void
    constructor(client:Stan){
        this.client=client
    }
    subscribeOptions(){
        return this.client.subscriptionOptions().setManualAckMode(true).setDeliverAllAvailable().setDurableName(this.queueName)
    }
    listen(){
        this.client.subscribe(this.subject,this.queueName,this.subscribeOptions()).on("message",(msg:Message)=>{
            console.log("here")
            this.onMessage(msg.getData(),msg)
        })
    }
    
}
export default Listener