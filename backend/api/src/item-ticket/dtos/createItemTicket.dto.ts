import {  IsNumber } from 'class-validator';

export class CreateItemTicketDto{

    @IsNumber()
    ticketId: number;

    @IsNumber()
    productId: number;

    @IsNumber()
    quantity: number;

}