import { NextFunction, Request, Response } from "express";
import GeneralErrors  from "../Errors/GeneralErrors";
import InvalidParamsError from "../Errors/InvalidParamsError";

const ErrorHandler=(error:Error,req:Request,res:Response,next:NextFunction)=>{
    if(error instanceof GeneralErrors){
        console.log("here")
        res.status(error.status).send({error:error.errorFormat()})
        return
    }
    if(error instanceof InvalidParamsError){
        console.log("here")
        res.status(error.status).send({error:error.errorFormat()})
        return
    }
res.status(400).send([{msg:error.message}])
}

export default ErrorHandler