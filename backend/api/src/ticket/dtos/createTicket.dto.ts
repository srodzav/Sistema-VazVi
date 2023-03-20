import {IsNumber} from 'class-validator';

export class CreateTicketDto{

    @IsNumber()
    total: number;

    @IsNumber()
    is_payed: number;

    @IsNumber()
    paymentId: number;

    @IsNumber()
    clientId: number;
}