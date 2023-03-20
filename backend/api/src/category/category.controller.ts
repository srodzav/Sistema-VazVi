import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';
import { Category } from './entity/category.entity';

@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService){}

    @Get()
    getAll(): Promise<Category[]>{
        return this.categoryService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:string): Promise<Category>{
        return this.categoryService.findById(parseInt(id));
    }
    
    @Post()
    create(@Body() category:CreateCategoryDto): Promise<CreateCategoryDto>{
        return this.categoryService.create(category);
    }
    
    @Patch()
    update(@Body() category:UpdateCategoryDto): Promise<UpdateResult>{
        return this.categoryService.update(category)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.categoryService.delete(id)
    }

}
