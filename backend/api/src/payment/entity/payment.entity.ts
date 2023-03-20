import { Ticket } from "src/ticket/entity/ticket.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @OneToOne(() => Ticket, (ticket: Ticket) => ticket.id)
    @JoinColumn()
    ticket: Ticket;

}