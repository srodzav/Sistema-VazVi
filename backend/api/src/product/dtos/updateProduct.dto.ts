import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto{

    @IsNumber() 
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    brandId: number;

    @IsNumber()
    @IsOptional()
    is_active: number;
    
}