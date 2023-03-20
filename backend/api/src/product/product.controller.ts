import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';
import { Product } from './entity/product.entity';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get()
    getAll(): Promise<Product[]>{
        return this.productService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:number): Promise<Product>{
        return this.productService.findById( id );
    }
    
    @Post()
    create(@Body() product:CreateProductDto): Promise<CreateProductDto>{
        console.log(product);
        return this.productService.create(product);
    }
    
    @Patch()
    update(@Body() product:UpdateProductDto): Promise<UpdateResult>{
        return this.productService.update(product)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.productService.delete(id)
    }

}