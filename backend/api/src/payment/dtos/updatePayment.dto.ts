import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePaymentDto{

    @IsNumber() 
    id: number;

    @IsNumber()
    amount: number;

    @IsNumber()
    ticketId: number;    
}