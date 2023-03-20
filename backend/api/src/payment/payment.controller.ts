import { Controller, Get } from '@nestjs/common';
import { Delete, Patch, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateResult } from 'typeorm';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dtos/createPayment.dto';
import { UpdatePaymentDto } from './dtos/updatePayment.dto';
import { Payment } from './entity/payment.entity';

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService){}

    @Get()
    getAll(): Promise<Payment[]>{
        return this.paymentService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:number): Promise<Payment>{
        return this.paymentService.findById( id );
    }
    
    @Post()
    create(@Body() payment:CreatePaymentDto): Promise<CreatePaymentDto>{
        console.log(payment);
        return this.paymentService.create(payment);
    }
    
    @Patch()
    update(@Body() payment:UpdatePaymentDto): Promise<UpdateResult>{
        return this.paymentService.update(payment)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.paymentService.delete(id)
    }

}