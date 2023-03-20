import { IsNumber } from "class-validator";

export class UpdateItemTicketDto{

    @IsNumber()
    id: number;

    @IsNumber()
    ticketId: number;

    @IsNumber()
    productId: number;

    @IsNumber()
    quantity: number;
    
}