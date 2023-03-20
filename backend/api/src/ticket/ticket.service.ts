import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Ticket } from './entity/ticket.entity';
import { CreateTicketDto } from './dtos/createTicket.dto';
import { UpdateTicketDto } from './dtos/updateTicket.dto';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: Repository<Ticket>,
    ) {}
    
    findAll(): Promise<Ticket[]> {
        return this.ticketRepository.find();
    }

    findById(id: number): Promise<Ticket> {
        return this.ticketRepository.findOne({ 
        where: { id: id },
        });
    }

    create(ticket: CreateTicketDto): Promise<CreateTicketDto> {
        return this.ticketRepository.save(ticket);
    }

    update(ticket: UpdateTicketDto): Promise<UpdateResult> {
        return this.ticketRepository.update({ id: ticket.id }, ticket);
    }

    delete(id: number) {
        return this.ticketRepository.delete({ id: id });
    }
}
