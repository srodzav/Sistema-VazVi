import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { ClientService } from './client.service';
import { CreateClientDto } from './dtos/createClient.dto';
import { UpdateClientDto } from './dtos/updateClient.dto';
import { Client } from './entity/client.entity';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService){}

    @Get()
    getAll(): Promise<Client[]>{
        return this.clientService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:string): Promise<Client>{
        return this.clientService.findById(parseInt(id));
    }
    
    @Post()
    create(@Body() client:CreateClientDto): Promise<CreateClientDto>{
        console.log(client);
        return this.clientService.create(client);
    }
    
    @Patch()
    update(@Body() client:UpdateClientDto): Promise<UpdateResult>{
        return this.clientService.update(client)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.clientService.delete(id)
    }

}
