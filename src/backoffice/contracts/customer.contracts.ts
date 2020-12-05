import { Injectable } from "@nestjs/common";
import { Flunt } from "src/utils/flunt";
import { Customer } from "../models/customer.model";
import { Contract } from "./contract";

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome inválido');

        this.errors = flunt.errors;
        return this.errors.length === 0;
    }
}