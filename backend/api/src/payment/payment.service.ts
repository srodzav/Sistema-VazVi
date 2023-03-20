import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Payment } from './entity/payment.entity';
import { CreatePaymentDto } from './dtos/createPayment.dto';
import { UpdatePaymentDto } from './dtos/updatePayment.dto';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private paymentRepository: Repository<Payment>,
    ) {}

    findAll(): Promise<Payment[]> {
    return this.paymentRepository.find({
        relations: {
            ticket: true
        },
        });
    }

    findById(id: number): Promise<Payment> {
    return this.paymentRepository.findOne({ 
        where: { id: id },
        relations: {
            ticket: true
        },
        });
    }

    create(payment: CreatePaymentDto): Promise<CreatePaymentDto> {
        return this.paymentRepository.save(payment);
    }

    update(payment: UpdatePaymentDto): Promise<UpdateResult> {
        return this.paymentRepository.update({ id: payment.id }, payment);
    }

    delete(id: number) {
        return this.paymentRepository.delete({ id: id });
    }
}
