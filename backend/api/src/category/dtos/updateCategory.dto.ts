import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto{

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    is_active: number;
}