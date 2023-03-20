import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCategoryDto{
    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    is_active: number;
}