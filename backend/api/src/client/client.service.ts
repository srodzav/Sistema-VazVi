import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Client } from './entity/client.entity';
import { CreateClientDto } from './dtos/createClient.dto';
import { UpdateClientDto } from './dtos/updateClient.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findById(id: number): Promise<Client>{
    return this.clientRepository.findOneBy({id:id});
  }

  create(client: CreateClientDto): Promise<CreateClientDto>{
    return this.clientRepository.save(client);
  }

  update(client:UpdateClientDto): Promise<UpdateResult>{
    return this.clientRepository.update({id:client.id}, client)
  }

  delete(id:number){
    return this.clientRepository.delete({id:id});
  }

}
