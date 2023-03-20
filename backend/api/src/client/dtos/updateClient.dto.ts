import { IsNumber, IsString } from "class-validator";

export class UpdateClientDto{

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    first_name: string;

    @IsString()
    phone: string;

    @IsNumber()
    debt: number;
    
}