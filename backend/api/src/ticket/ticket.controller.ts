import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dtos/createTicket.dto';
import { UpdateTicketDto } from './dtos/updateTicket.dto';
import { Ticket } from './entity/ticket.entity';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService){}

    @Get()
    getAll(): Promise<Ticket[]>{
        return this.ticketService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:number): Promise<Ticket>{
        return this.ticketService.findById( id );
    }

    @Post()
    create(@Body() ticket:CreateTicketDto): Promise<CreateTicketDto>{
        console.log(ticket);
        return this.ticketService.create(ticket);
    }

    @Patch()
    update(@Body() ticket:UpdateTicketDto): Promise<UpdateResult>{
        return this.ticketService.update(ticket)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.ticketService.delete(id)
    }
}
