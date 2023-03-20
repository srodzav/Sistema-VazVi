import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTicket } from './entity/item-ticket.entity';
import { ItemTicketController } from './item-ticket.controller';
import { ItemTicketService } from './item-ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTicket])],
  providers: [ItemTicketService],
  controllers: [ItemTicketController]
})
export class ItemTicketModule {}
