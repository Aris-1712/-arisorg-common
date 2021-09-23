import jwt from 'jsonwebtoken';
export declare const hashedPass: (password: string) => Promise<string>;
export declare const comparePass: (password: string, hashed: string) => Promise<boolean>;
export declare const genToken: (payLoad: Object) => Promise<string>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload>;
