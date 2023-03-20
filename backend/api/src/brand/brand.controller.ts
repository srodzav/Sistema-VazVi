import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/createBrand.dto';
import { UpdateBrandDto } from './dtos/updateBrand.dto';
import { Brand } from './entity/brand.entity';

@Controller('brand')
export class BrandController {

    constructor(private readonly brandService: BrandService){}

    @Get()
    getAll(): Promise<Brand[]>{
        return this.brandService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:string): Promise<Brand>{
        return this.brandService.findById(parseInt(id));
    }
    
    @Post()
    create(@Body() brand:CreateBrandDto): Promise<CreateBrandDto>{
        return this.brandService.create(brand);
    }
    
    @Patch()
    update(@Body() brand:UpdateBrandDto): Promise<UpdateResult>{
        return this.brandService.update(brand)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.brandService.delete(id)
    }

}
