import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError  {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super('Error connecting to DB')

        //Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.param }
        }) 
    }
}


//   serializeErrors() {
//     return this.errors.map((err) => {
//       if (err.type === 'field') {
//         return { message: err.msg, field: err.path };
//       }
//       return { message: err.msg };
//     });
//   }
// }
