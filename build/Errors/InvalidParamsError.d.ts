interface ErrorType {
    msg: string;
    param?: string;
}
declare class InvalidParamsError extends Error {
    errors: ErrorType[];
    status: number;
    constructor(errors: ErrorType[]);
    errorFormat: () => {
        msg: string;
        param: string | undefined;
    }[];
}
export { InvalidParamsError };
