import { Injectable } from "@nestjs/common";
import { Flunt } from "src/utils/flunt";
import { CreateCustomerDto } from '../dtos/create-customer-dto';
import { Contract } from "./contract";

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: CreateCustomerDto): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome inválido');

        this.errors = flunt.errors;
        return this.errors.length === 0;
    }
}