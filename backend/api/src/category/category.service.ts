import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findById(id: number): Promise<Category>{
    return this.categoryRepository.findOneBy({id:id});
  }

  create(category: CreateCategoryDto): Promise<CreateCategoryDto>{
    return this.categoryRepository.save(category);
  }

  update(category:UpdateCategoryDto): Promise<UpdateResult>{
    return this.categoryRepository.update({id:category.id}, category)
  }

  delete(id:number){
    return this.categoryRepository.delete({id:id});
  }
  

}
