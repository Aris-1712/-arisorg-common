interface ErrorBody {
    msg:string,
    param?:string,
    location?:string,
    value?:string | number
}
class GeneralErrors extends Error{
    errors:ErrorBody[]   
    status=500
    constructor(errors:ErrorBody[]){
        super("General Error")
        this.errors=errors
        Object.setPrototypeOf(this, GeneralErrors.prototype)
    }
    errorFormat=()=>{
        return this.errors.map((ele)=>{
            return {msg:ele.msg,param:ele.param}
        })
    }
}



export  {GeneralErrors}