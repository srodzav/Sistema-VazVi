import { Brand } from "src/brand/entity/brand.entity";
import { Category } from "src/category/entity/category.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @OneToOne(() => Category, (category: Category) => category.id)
    @JoinColumn()
    category: Category;

    @OneToOne(() => Brand, (brand: Brand) => brand.id)
    @JoinColumn()
    brand: Brand;

    @Column()
    is_active: number;

}