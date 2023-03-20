import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ItemTicket } from './entity/item-ticket.entity';
import { CreateItemTicketDto } from './dtos/createItemTicket.dto';
import { UpdateItemTicketDto } from './dtos/updateItemTicket.dto';

@Injectable()
export class ItemTicketService {
  constructor(
    @InjectRepository(ItemTicket)
    private ItemTicketRepository: Repository<ItemTicket>,
  ) {}

  findAll(): Promise<ItemTicket[]> {
    return this.ItemTicketRepository.find({
      relations: {
        product: true,
      },
    });
  }

  findById(id: number): Promise<ItemTicket> {
    return this.ItemTicketRepository.findOne({
      where: { id: id },
      relations: {
        product: true,
      },
    });
  }

  create(itemTicket: CreateItemTicketDto): Promise<CreateItemTicketDto> {
    return this.ItemTicketRepository.save(itemTicket);
  }

  update(itemTicket: UpdateItemTicketDto): Promise<UpdateResult> {
    return this.ItemTicketRepository.update({ id: itemTicket.id }, itemTicket);
  }

  delete(id: number) {
    return this.ItemTicketRepository.delete({ id: id });
  }
}
