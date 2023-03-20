import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBrandDto{
    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    is_active: number;
}