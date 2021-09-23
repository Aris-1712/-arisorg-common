
import {compare, genSalt,hash} from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashedPass=async(password:string)=>{
const salt=await genSalt(10)
const hashed=await hash(password,salt)
return hashed
}

export const comparePass=async(password:string,hashed:string)=>{
    let compared=await compare(password,hashed)
    return compared

}


export const genToken=async(payLoad:Object)=>{
    return await jwt.sign(payLoad,"Arisgani1712")
}

export const verifyToken=async(token:string)=>{
    return await jwt.verify(token,"Arisgani1712")
}
