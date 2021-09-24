interface ErrorBody {
    msg: string;
    param?: string;
    location?: string;
    value?: string | number;
}
declare class GeneralErrors extends Error {
    errors: ErrorBody[];
    status: number;
    constructor(errors: ErrorBody[]);
    errorFormat: () => {
        msg: string;
        param: string | undefined;
    }[];
}
export { GeneralErrors };
