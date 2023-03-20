import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePaymentDto{
    @IsNumber()
    amount: number;

    @IsNumber()
    ticketId: number;
}