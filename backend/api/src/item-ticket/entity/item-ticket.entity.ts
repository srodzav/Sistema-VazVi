import { Product } from "src/product/entity/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemTicket{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    ticketId: number;

    @OneToOne(() => Product, (product: Product) => product.id)
    @JoinColumn()
    product: Product;

    @Column()
    quantity: number;

}