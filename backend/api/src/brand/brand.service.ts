import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Brand } from './entity/brand.entity';
import { CreateBrandDto } from './dtos/createBrand.dto';
import { UpdateBrandDto } from './dtos/updateBrand.dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  findById(id: number): Promise<Brand>{
    return this.brandRepository.findOneBy({id:id});
  }

  create(brand: CreateBrandDto): Promise<CreateBrandDto>{
    return this.brandRepository.save(brand);
  }

  update(brand:UpdateBrandDto): Promise<UpdateResult>{
    return this.brandRepository.update({id:brand.id}, brand)
  }

  delete(id:number){
    return this.brandRepository.delete({id:id});
  }
  

}
