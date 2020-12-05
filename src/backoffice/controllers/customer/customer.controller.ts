import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { Customer } from '../../models/customer.model';
import { Result } from '../../models/result.model';

@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {
        return 'Obter clientes';
    }

    @Get(':document')
    getById(@Param('document') document : string) {
        return 'Obter o cliente ' + document;
    }

    @Post()
    post(@Body() body : Customer) {
       return body;
    }

    @Put(':document')
    put(@Param('document') document, @Body() body) {
       return {
           customer: document,
           data: body
       }
    }

    @Patch(':document')
    patch(@Param('document') document, @Body() body) {
      return 'Atualizar parcialmente clientes';
    }

    @Delete(':document')
    delete(@Param('document') document) {
      return 'Deletar clientes';
    }
}
