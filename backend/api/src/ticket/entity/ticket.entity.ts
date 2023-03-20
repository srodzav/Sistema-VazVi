import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    total: number;

    @Column()
    is_payed: number;

    @Column()
    paymentId: number;

    @Column()
    clientId: number;
}