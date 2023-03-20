import { IsNumber} from "class-validator";

export class UpdateTicketDto{

    @IsNumber() 
    id: number;

    @IsNumber()
    total: number;

    @IsNumber()
    is_payed: number;

    @IsNumber()
    paymentId: number;

    @IsNumber()
    clientId: number;
}