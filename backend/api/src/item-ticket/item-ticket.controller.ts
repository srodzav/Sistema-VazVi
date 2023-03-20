import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { ItemTicketService } from './item-ticket.service';
import { CreateItemTicketDto } from './dtos/createItemTicket.dto';
import { UpdateItemTicketDto } from './dtos/updateItemTicket.dto';
import { ItemTicket } from './entity/item-ticket.entity';

@Controller('item-ticket')
export class ItemTicketController {
    constructor(private readonly ItemTicketService: ItemTicketService){}

    @Get()
    getAll(): Promise<ItemTicket[]>{
        return this.ItemTicketService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:string): Promise<ItemTicket>{
        return this.ItemTicketService.findById(parseInt(id));
    }
    
    @Post()
    create(@Body() itemTicket:CreateItemTicketDto): Promise<CreateItemTicketDto>{
        console.log(itemTicket);
        return this.ItemTicketService.create(itemTicket);
    }
    
    @Patch()
    update(@Body() itemTicket:UpdateItemTicketDto): Promise<UpdateResult>{
        return this.ItemTicketService.update(itemTicket)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.ItemTicketService.delete(id)
    }
   
}
