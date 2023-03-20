import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    first_name: string;

    @Column()
    phone: string;

    @Column()
    debt: number;

}