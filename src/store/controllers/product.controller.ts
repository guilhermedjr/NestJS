import {Controller, HttpException, HttpStatus, Get, Post, Body, Put} from '@nestjs/common';
import {ProductService} from '../services/product.service';
import { Product } from '../entities/product.entity';
import { Result } from 'src/backoffice/models/result.model';

@Controller('v1/products')
export class ProductController {
    constructor(private readonly service : ProductService) {}    

    /*@Get()
    async get() {
        try {
            const products = await this.service.get();
            return new Result(null, true, products, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível listar os produtos', false, null, null));
        }
    }*/

}