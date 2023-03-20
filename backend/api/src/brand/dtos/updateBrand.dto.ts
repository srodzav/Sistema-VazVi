import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateBrandDto{

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    is_active: number;
    
}