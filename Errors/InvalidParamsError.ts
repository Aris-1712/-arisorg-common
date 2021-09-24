interface ErrorType {
    msg:string,
    param?:string
}

class InvalidParamsError extends Error {
    errors:ErrorType[]
    status:number=401
    constructor(errors:ErrorType[]){
        super("Invalid Param Error")
        this.errors=errors
        Object.setPrototypeOf(this,InvalidParamsError.prototype)
    }
    errorFormat=()=>{
        return this.errors.map((ele:ErrorType)=>{
            return({msg:ele.msg,param:ele.param})
        })
    }

     
}


export default InvalidParamsError